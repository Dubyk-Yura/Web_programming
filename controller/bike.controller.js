const db = require("../db");

class BikeController {
  async createBike(req, res) {
    const { name, price, weight, type } = req.body;
    const newBike = await db.query(
      `INSERT INTO bicycles (name, price, weight, type) VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, price, weight, type]
    );
    res.json(newBike.rows[0]);
  }

  async getAllBike(req, res) {
    const allBikes = await db.query(`SELECT * FROM bicycles`);
    res.json(allBikes.rows);
  }

  async getOneBike(req, res) {
    const id = req.params.id;
    const oneBike = await db.query(
      `SELECT * FROM bicycles WHERE bicycles.id = $1`,
      [id]
    );
    res.json(oneBike.rows[0]);
  }

  async getSortedBike(req, res) {
    const sortedBikes = await db.query(
      `SELECT * FROM bicycles ORDER BY weight`
    );
    res.json(sortedBikes.rows);
  }

  async updateBike(req, res) {
    const { id, name, price, weight, type } = req.body;
    const updateBike = await db.query(
      `UPDATE bicycles SET name = $1, price = $2, weight=$3, type = $4 WHERE id = $5 RETURNING *`,
      [name, price, weight, type, id]
    );
    res.json(updateBike.rows[0]);
  }

  async deleteBike(req, res) {
    const id = req.params.id;
    const deleteBike = await db.query(
      `DELETE FROM bicycles WHERE bicycles.id = $1`,
      [id]
    );
    res.json(deleteBike.rows[0]);
  }
}

module.exports = new BikeController();
