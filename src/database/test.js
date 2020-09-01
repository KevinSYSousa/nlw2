const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    proffyValue = {
        name: "Thatiana Fonseca",
        avatar: "https://image.freepik.com/free-vector/fresh-healthy-vegetables_53876-15659.jpg",
        whatsapp: "35984438561",
        bio: "Entusiasta das melhores tecnologias de alimentos.<br><br>Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de alimentos. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }
    classValue = {
        subject: "Química",
        cost: "20",
    }
    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    
})