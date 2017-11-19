const questionsWithAnswers = [
    {
        id: 'question_1',
        title: 'If you could only do one thing, for the rest of your life, you would:',
        type: 'radio',
        answers: [
            {
                title: 'Travel the world and go on adventures',
                id: 'answer_1_1',
                values: {
                    gryffindor: 1,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'Start your own company',
                id: 'answer_1_2',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 1,
                    ravenclaw: 0
                }
            },{
                title: 'Get maried and have lots of children',
                id: 'answer_1_3',
                values: {
                    gryffindor: 0,
                    hufflepuff: 1,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'Spend your life studying, you can never learn too much',
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
        title: 'Pick a holiday destination.',
        type: 'radio',
        answers: [
            {
                title: 'Mount Everest base camp',
                id: 'answer_2_1',
                values: {
                    gryffindor: 1,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'An ancient city to explore',
                id: 'answer_2_2',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 1
                }
            },{
                title: 'A cozy cabin in the woods',
                id: 'answer_2_3',
                values: {
                    gryffindor: 0,
                    hufflepuff: 1,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'A luxury retreat',
                id: 'answer_2_4',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 1,
                    ravenclaw: 0
                }
            }
        ]
    },{
        id: 'question_3',
        title: 'You would be most hurt if a person called you:',
        type: 'radio',
        answers: [
            {
                title: 'Unkind',
                id: 'answer_3_1',
                values: {
                    gryffindor: 0,
                    hufflepuff: 1,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'Boring',
                id: 'answer_3_2',
                values: {
                    gryffindor: 1,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 1
                }
            },{
                title: 'Ignorant',
                id: 'answer_3_3',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 1
                }
            },{
                title: 'Weak',
                id: 'answer_3_4',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 1,
                    ravenclaw: 0
                }
            }
        ]
    },{
        id: 'question_4',
        title: 'It\'s saturday, you finished your homework and you have some free time. You decide to spend some time away from your common room. Where do you go?',
        answers: [
            {
                title: 'Forbidden forest',
                id: 'answer_4_1',
                values: {
                    gryffindor: 1,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'The library',
                id: 'answer_4_2',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 1
                }
            },{
                title: 'The room of requirement',
                id: 'answer_4_3',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 1,
                    ravenclaw: 0
                }
            },{
                title: 'The kitchens',
                id: 'answer_4_4',
                values: {
                    gryffindor: 0,
                    hufflepuff: 1,
                    slitherin: 0,
                    ravenclaw: 0
                }
            }
        ]
    },{
        id: 'question_5',
        title: 'Which deathly hallow would you choose?',
        type: 'radio',
        answers: [
            {
                title: 'Elderwand',
                id: 'answer_5_1',
                values: {
                    gryffindor: 1,
                    hufflepuff: 0,
                    slitherin: 1,
                    ravenclaw: 0
                }
            },{
                title: 'Invisibility cloak',
                id: 'answer_5_2',
                values: {
                    gryffindor: 1,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 1
                }
            },{
                title: 'Resurrection stone',
                id: 'answer_5_3',
                values: {
                    gryffindor: 0,
                    hufflepuff: 1,
                    slitherin: 0,
                    ravenclaw: 0
                }
            }
        ]
    },{
        id: 'question_6',
        title: 'The goal in life is to be successful and have a great carreer.',
        type: 'slider',
        answers: [
            {
                title: 'Agree',
                id: 'answer_6_1'
            },{
                title: 'Neutral',
                id: 'answer_6_2'
            },{
                title: 'Disagree',
                id: 'answer_6_3'
            }
        ],
        slider_ranges: ['slitherin','ravenclaw','gryffindor','hufflepuff']
    },{
        id: 'question_7',
        title: 'Whats more important',
        type: 'slider',
        answers: [
            {
                title: 'Loyalty',
                id: 'answer_7_1'
            },{
                title: 'Braveness',
                id: 'answer_7_2'
            }
        ],
        slider_ranges: ['hufflepuff','ravenclaw','gryffindor','slitherin']
    },{
        id: 'question_8',
        title: 'Pick a pet',
        type: 'radio',
        answers: [
            {
                title: 'Toad',
                id: 'answer_8_1',
                values: {
                    gryffindor: 0,
                    hufflepuff: 1,
                    slitherin: 0,
                    ravenclaw: 0
                }
            },{
                title: 'Rat',
                id: 'answer_8_2',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 1
                }
            },{
                title: 'Cat',
                id: 'answer_8_3',
                values: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slitherin: 1,
                    ravenclaw: 0
                }
            },{
                title: 'Owl',
                id: 'answer_8_4',
                values: {
                    gryffindor: 1,
                    hufflepuff: 0,
                    slitherin: 0,
                    ravenclaw: 0
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

