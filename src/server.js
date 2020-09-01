const proffys = [
    { name: "Thatiana Fonseca", avatar: "https://image.freepik.com/free-vector/fresh-healthy-vegetables_53876-15659.jpg", whatsapp: "35984438561", bio: "Entusiasta das melhores tecnologias de alimentos.<br><br>Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de alimentos. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject: "Química", cost: "20", weekday: [0], time_from: [720], time_to: [1220]}
]
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")  
}
function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
    data.subject = getSubject(data.subject)
    proffys.push(data)

    return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)