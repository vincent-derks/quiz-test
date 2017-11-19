import { questions } from './../data/questions'

class QuizTest {

    constructor(){

        // Set up global properties
        this.form = document.getElementById('quiz-form')
        this.questionSlider = document.getElementById('question-slider')
        this.totalQuestions = questions.length
        this.currentSlide = 1
        
        // Set up the quiz questions
        this.questionsSetup()
        this.nextButtons = document.getElementsByClassName('next-question')

        // Kick off events
        this.events()

        // Bindings
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.answerQuestion = this.answerQuestion.bind(this)
    }

    questionsSetup(){
        // Fill out number of questions in intro text
        const questionCountEl = document.getElementById('question-count')
        if (questionCountEl) questionCountEl.innerHTML = this.totalQuestions

        // Set up the question list
        let questionListHtml = ''
        for (let question of questions) {
            if (question.type == 'radio'){
                questionListHtml += this.renderRadioQuestions(question)
            } else if (question.type == 'slider') {
                questionListHtml += this.renderSliderQuestions(question)
            }
        }
        this.questionSlider.innerHTML += questionListHtml
    }

    renderRadioQuestions(question){
        let answerlist = ''
        for (let answer of question.answers) {
            answerlist += `<input type="radio" id="${answer.id}" name="${question.id}"><label for="${answer.id}">${answer.title}</label><br>`
        }
        return `
            <li>
                <h2>${question.title}</h2>
                ${answerlist}
                <button class="next-question">Next</button>
            </li>
        `
    }

    renderSliderQuestions(question){
        let labels = ''
        for (let answer of question.answers) {
            labels += `<span>${answer.title}</span>`
        }
        return `
            <li>
                <h2>${question.title}</h2>
                <input type="range" min="1" max="100" id="${question.id}">
                <div class="slider-labels">${labels}</div>
                <button class="next-question">Next</button>
            </li>
        `
    }

    answerQuestion(){
        if ( this.currentSlide >= this.totalQuestions ) return false 
        this.currentSlide++
        this.setCurrentSlide()
    }

    setCurrentSlide(){
        const listItems = this.questionSlider.getElementsByTagName('li')
        Array.from(listItems).forEach( (item, index) => {
            item.classList.remove('active')
            if ( ( index + 1 ) == this.currentSlide ) item.classList.add('active')
        })
    }

    events(){
        if (this.form) this.form.addEventListener('submit', e => this.handleFormSubmit(e))
        if (this.nextButtons) Array.from(this.nextButtons).forEach(button => button.addEventListener('click', e => {
            e.preventDefault()
            this.answerQuestion()
        }))
    }

    handleFormSubmit(e){
        e.preventDefault()
        const data = {
            test: 'test'
        }
        fetch('/api/answers', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }

}

new QuizTest