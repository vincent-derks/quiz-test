class QuizTest {

    constructor(){
        this.button = document.getElementById('post-answers')
        this.events()
    }

    events(){
        this.button.addEventListener('click', e => {
            const data = {
                test: 'test'
            }
            fetch('/api/answers', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => console.log(res))
        })
    }

}

new QuizTest()