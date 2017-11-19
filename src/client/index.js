import { questions } from './../data/questions'

class QuizTest {

    constructor(){

        // Set up global properties
        this.form = document.getElementById('quiz-form')
        this.questionSlider = document.getElementById('question-slider')
        this.totalQuestions = questions.length
        this.currentSlide = 1
        this.sortingHat = document.getElementById('sorting')
        // Time mouth talks (in milliseconds). Don't forget to also change this value in the CSS in the SVG element
        this.talkingLength = 1000

        // We want to animate the mouth, so we have to wait with loading the rest of the quiz, till the SVG is loaded
        this.sortingHat.addEventListener('load', () => {
            this.sortingHatMouth = this.sortingHat.contentDocument.getElementById('mouth')
            // Set up the quiz questions
            this.questionsSetup()
            this.nextButtons = document.getElementsByClassName('next-question')

            // Kick off events
            this.events()
        })        

        // Bindings
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.answerQuestion = this.answerQuestion.bind(this)
    }

    events(){
        if (this.form) this.form.addEventListener('submit', e => this.handleFormSubmit(e))
        if (this.nextButtons) Array.from(this.nextButtons).forEach(button => button.addEventListener('click', e => {
            e.preventDefault()
            this.answerQuestion()
        }))
    }

    questionsSetup(){
        // Fill out number of questions in intro text
        const questionCountEl = document.getElementById('question-count')
        if (questionCountEl) questionCountEl.innerHTML = this.totalQuestions

        // Set up the question list
        let questionListHtml = ''
        questions.forEach((question, index) => {
            // Check the question type, run render function based on question type
            const last = ( questions.length - 1 ) == index
            if (question.type == 'radio'){
                questionListHtml += this.renderRadioQuestions(question, last)
            } else if (question.type == 'slider') {
                questionListHtml += this.renderSliderQuestions(question, last)
            }
        })

        // Add the questions to the DOM
        this.questionSlider.innerHTML += questionListHtml

        // Let the hat talk for the first time
        this.animateMouth()
    }

    renderRadioQuestions(question, last){
        // First build the list of answers
        let answerlist = ''
        for (let answer of question.answers) {
            answerlist += `<input type="radio" id="${answer.id}" name="${question.id}"><label for="${answer.id}">${answer.title}</label><br>`
        }
        // Return the HTML for the question
        return `
            <li>
                <h2>${question.title}</h2>
                ${answerlist}
                <div class="error"></div>
                ${last ? '<button class="finish-quiz">Show me my house</button>' : '<button class="next-question">Next</button>'}
            </li>
        `
    }

    renderSliderQuestions(question, last){
        // First set up the labels for underneath the slider 
        let labels = ''
        for (let answer of question.answers) {
            labels += `<span>${answer.title}</span>`
        }
        // Return the HTML for the question
        return `
            <li>
                <h2>${question.title}</h2>
                <input type="range" min="1" max="100" id="${question.id}">
                <div class="slider-labels">${labels}</div>
                <div class="error"></div>
                ${last ? '<button class="finish-quiz">Show me my house</button>' : '<button class="next-question">Next</button>'}
            </li>
        `
    }

    answerQuestion(){
        // If it's the last question, don't go further
        if ( this.currentSlide >= this.totalQuestions ) return false 
        if ( !this.checkForAnswerGiven() ) {
            this.showError('Please select an answer, otherwise I can\'t make a wise decision')
            return false
        }
        this.showError('')
        // First fade out everything, for a smooth transition
        this.fadeOutQuestionSlider(() => {
            this.currentSlide++
            this.setCurrentSlide()
            setTimeout(() => this.fadeInQuestionSlider(), 200)
        })
    }

    checkForAnswerGiven(){
        const activeItem = this.questionSlider.querySelector('.active')
        if (activeItem.classList.contains('intro')) return true
        const inputs = Array.from(activeItem.querySelectorAll('input'))
        let answer = false
        for(const input of inputs){
            if (input.type == 'range') answer = true
            if (input.checked) answer = true 
        }
        return answer
    }

    animateMouth(){
        this.sortingHatMouth.classList.add('talk')
        setTimeout(() => this.sortingHatMouth.classList.remove('talk'), this.talkingLength)
    }

    fadeOutQuestionSlider(callback){
        this.questionSlider.classList.add('faded-out')
        setTimeout(() => callback(), 200)
    }

    fadeInQuestionSlider(){
        this.animateMouth()
        this.questionSlider.classList.remove('faded-out')
    }

    setCurrentSlide(){
        // Set the current slide as active
        const listItems = this.questionSlider.getElementsByTagName('li')
        Array.from(listItems).forEach( (item, index) => {
            item.classList.remove('active')
            if ( ( index + 1 ) == this.currentSlide ) item.classList.add('active')
        })
    }

    showError(message){
        const activeItem = this.questionSlider.querySelector('.active')
        const errorDiv = activeItem.querySelector('.error')
        errorDiv.innerHTML = message
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