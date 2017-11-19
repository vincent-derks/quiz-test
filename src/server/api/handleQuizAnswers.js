import questions from './../../data/questions'

const handleQuizAnswers = (req, res) => {
    
    // Set up object that will keep the score
    const points = {
        gryffindor: 0,
        hufflepuff: 0,
        slytherin: 0,
        ravenclaw: 0
    }

    // Get the answers from the request body
    const answers = req.body

    // Map over all the answers, to assign points to the corresponding house
    Object.keys(answers).map((key, index) => {
        const answer = answers[key]
        if (questions[index].type == 'slider') {
            // Find the house corresponding to the slider score. In the array "slider_ranges" are the houses defined, corresponding to the scores. 1-25 is position 0, 26-50 position 1, 51-75 is position 2 and 76 - 100 is position 3.
            let house = ''
            if (answer > 75) {
                house = questions[index].slider_ranges[3]
            } else if (answer > 50) {
                house = questions[index].slider_ranges[2]
            } else if (answer > 25) {
                house = questions[index].slider_ranges[1]
            } else {
                house = questions[index].slider_ranges[0]
            }
            points[house]++
        } else if (questions[index].type == 'radio') {
            // Get the house that deserve points for the answer. In the array "points" is described which houses get points for the answer.
            const houses = questions[index].answers[answer].points
            houses.forEach(house => points[house]++)
        }        
    })

    // Find the house with the highest score
    let highest = ''
    Object.keys(points).forEach((key, index) => {
        if(!highest) highest = key
        if(points[key] > points[highest]) highest = key
    })

    // Return the house with the highest score
    return JSON.stringify(highest)
}

export default handleQuizAnswers