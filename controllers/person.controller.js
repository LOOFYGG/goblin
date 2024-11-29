const db = require('../db.js');

class PersonController{
    async createPerson(req, res){
        const {firstname, lastname,phone} = req.body;
        const newCar = await db.query(`INSERT INTO person (firstname, lastname,phone) VALUES ($1, $2, $3) RETURNING *`, [firstname, lastname,phone]);
        res.json(newCar.rows[0]);
        console.log(newCar.rows[0])
    }
    async getPersons(req, res){
        const carsOne = await db.query(`SELECT id, firstname, lastname,phone FROM person`);
        res.json(carsOne.rows);
    }
    async getPerson(req, res){
        const id = req.params.id;
        const car = await db.query(`SELECT id, firstname, lastname, phone FROM person WHERE id = $1`, [id]);
        res.json(car.rows[0]);
        console.log(car.rows[0])
    }
    async updatePerson(req, res){
        const {firstname, lastname,phone, id} = req.body;
        const car = await db.query(`UPDATE person SET firstname=$1, lastname=$2, phone =$3 WHERE id = $4 RETURNING *`, [firstname, lastname,phone, id]);
        res.json(car.rows[0]);
    }
    async deletePerson(req, res){
        const id = req.params.id;
        await db.query(`DELETE FROM Person WHERE id = $1;`, [id]);
    }
}
module.exports = new PersonController();