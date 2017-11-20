const questionsWithAnswers = [
    {
        id: 'question_1',
        title: 'If you could only do one thing for the rest of your life, you would:',
        type: 'radio',
        answers: [
            {
                title: 'Travel the world and go on adventures',
                id: 'answer_1_1',
                points: ['gryffindor']
            },{
                title: 'Start your own company',
                id: 'answer_1_2',
                points: ['slytherin']
            },{
                title: 'Get maried and have lots of children',
                id: 'answer_1_3',
                points: ['hufflepuff']
            },{
                title: 'Spend your life studying, you can never learn too much',
                id: 'answer_1_4',
                points: ['ravenclaw']
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
                points: ['gryffindor']
            },{
                title: 'An ancient city to explore',
                id: 'answer_2_2',
                points: ['ravenclaw']
            },{
                title: 'A cozy cabin in the woods',
                id: 'answer_2_3',
                points: ['hufflepuff']
            },{
                title: 'A luxury retreat',
                id: 'answer_2_4',
                points: ['slytherin']
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
                points: ['hufflepuff']
            },{
                title: 'Boring',
                id: 'answer_3_2',
                points: ['gryffindor','ravenclaw']
            },{
                title: 'Ignorant',
                id: 'answer_3_3',
                points: ['ravenclaw']
            },{
                title: 'Weak',
                id: 'answer_3_4',
                points: ['slytherin']
            }
        ]
    },{
        id: 'question_4',
        title: 'It\'s saturday, you finished your homework and you have some free time. You decide to spend some time away from your common room. Where do you go?',
        type: 'radio',
        answers: [
            {
                title: 'Forbidden forest',
                id: 'answer_4_1',
                points: ['gryffindor']
            },{
                title: 'The library',
                id: 'answer_4_2',
                points: ['ravenclaw']
            },{
                title: 'The room of requirement',
                id: 'answer_4_3',
                points: ['slytherin']
            },{
                title: 'The kitchens',
                id: 'answer_4_4',
                points: ['hufflepuff']
            }
        ]
    },{
        id: 'question_5',
        title: 'Which Deathly Hallow would you choose?',
        type: 'radio',
        answers: [
            {
                title: 'Elder wand',
                id: 'answer_5_1',
                points: ['slytherin']
            },{
                title: 'Invisibility cloak',
                id: 'answer_5_2',
                points: ['gryffindor','ravenclaw']
            },{
                title: 'Resurrection stone',
                id: 'answer_5_3',
                points: ['hufflepuff']
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
        slider_ranges: ['slytherin','ravenclaw','gryffindor','hufflepuff']
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
        slider_ranges: ['hufflepuff','ravenclaw','gryffindor','slytherin']
    },{
        id: 'question_8',
        title: 'Pick a pet',
        type: 'radio',
        answers: [
            {
                title: 'Toad',
                id: 'answer_8_1',
                points: ['hufflepuff']
            },{
                title: 'Rat',
                id: 'answer_8_2',
                points: ['ravenclaw']
            },{
                title: 'Cat',
                id: 'answer_8_3',
                points: ['slytherin']
            },{
                title: 'Owl',
                id: 'answer_8_4',
                points: ['gryffindor']
            }
        ]
    }
]

// We want to export the questions without exposing the point-system to the frontend
export const questions = questionsWithAnswers.map(question => {
    return {
        ...question,
        slider_ranges: null,
        answers: question.answers.map(answer => { 
            return {
                title: answer.title, 
                id: answer.id 
            }
        })
    }
})

// Export everything for the backend
export default questionsWithAnswers

