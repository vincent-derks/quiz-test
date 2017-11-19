let express = require('express')
let bodyParser = require('body-parser')
let handleQuizAnswers = require('./api/handleQuizAnswers')

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
const Port = prod ? 8080 : 3000

App.listen(Port, () => {
    console.log(`listening on http://localhost:${Port}`)
})