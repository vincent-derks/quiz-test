const questionsWithAnswers = [
    {
        id: 'question_1',
        title: 'Beautiful question 1 title',
        answers: [
            {
                title: 'answer 1',
                id: 'answer_1_1',
                values: {
                    gryffindor: 1,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'answer 2',
                id: 'answer_1_2',
                values: {
                    gryffindor: 0,
                    hufflepuff: 1,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'answer 3',
                id: 'answer_1_3',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 1,
                    ravenclaw: 0
                }
            },{
                title: 'answer 4',
                id: 'answer_1_4',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 1
                }
            }
        ]
    },{
        id: 'question_2',
        title: 'Beautiful question 2 title',
        answers: [
            {
                title: 'answer 1',
                id: 'answer_2_1',
                values: {
                    gryffindor: 1,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'answer 2',
                id: 'answer_2_2',
                values: {
                    gryffindor: 0,
                    hufflepuff: 1,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'answer 3',
                id: 'answer_2_3',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 1,
                    ravenclaw: 0
                }
            },{
                title: 'answer 4',
                id: 'answer_2_4',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 1
                }
            }
        ]
    }
]

export const questions = questionsWithAnswers.map(question => {
    return {
        ...question,
        answers: question.answers.map(answer => { 
            return {
                title: answer.title, 
                id: answer.id 
            }
        })
    }
})

export default questionsWithAnswers

