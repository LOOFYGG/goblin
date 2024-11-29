const db = require('../db.js');

class CursController{
    async createCurse(req, res){
        const {namecurs, description,person_id} = req.body;
        const newCar = await db.query(`INSERT INTO curs (namecurs, description,person_id) VALUES ($1, $2, $3) RETURNING *`, [namecurs, description,person_id]);
        res.json(newCar.rows[0]);
        console.log(newCar.rows[0])
    }
    async getCurses(req, res){
        const carsOne = await db.query(`SELECT p.id, p.firstname, p.lastname, c.namecurs, c.description FROM Person p LEFT JOIN Curs c ON p.id = c.person_id`);
        res.json(carsOne.rows);  
    }
    /*
    SELECT p.id, p.firstname, p.lastname, c.namecurs, c.description FROM Person p LEFT JOIN Curs c ON p.id = c.person_id;
    хуйня для вывода
    мы извлекаем данные о людях и их курсах используя соединение один к многим по id 
    */
    async getCurse(req, res){
        const id = req.params.id;
        const car = await db.query(`SELECT c.id AS course_id, c.namecurs, c.description, p.id AS person_id, p.firstname, p.lastname FROM Curs c LEFT JOIN Person p ON c.person_id = p.id WHERE c.id = $1`, [id]);
        res.json(car.rows[0]);
        console.log(car.rows[0])
    }
    async updateCurse(req, res){
        const {namecurs, description,person_id, id} = req.body;
        const car = await db.query(`UPDATE curs SET namecurs=$1, description=$2, person_id=$3 WHERE id = $4 RETURNING *`, [namecurs, description,person_id, id]);
        res.json(car.rows[0]);
    }
    async deleteCurse(req, res){
        const id = req.params.id;
        await db.query(`DELETE FROM Curs WHERE person_id = $1;`, [id]);
    }
}
module.exports = new CursController();