let express = require('express')
let bodyParser = require('body-parser')
import handleQuizAnswers from './api/handleQuizAnswers'

const App = express()

App.use(express.static('web'))
App.use(bodyParser.urlencoded({ extended: true }))
App.use(bodyParser.json())

App.get('/', (req, res) => {
    res.send('index.html')
})

App.post('/api/answers', (req, res) => {
    res.send(handleQuizAnswers(req, res))
})

const prod = process.argv.indexOf('-p') !== -1
const Port = prod ? 8000 : 3000

App.listen(Port, () => {
    console.log(`listening on http://localhost:${Port}`)
})