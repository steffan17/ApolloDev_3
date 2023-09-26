const db = require(`../src/js/backend/db`)

const api = {

testFunc: (req, res) => {res.send(db.test())},
freeSQL: (req, res) => {res.send(db.freeSQL(req.query.tableName))},

getTables: (req, res) => {res.send(db.getTables())},
pico:(req, res) => {
    console.log("it's a live :-)")
    res.send(`OK`)
}


}

module.exports = api