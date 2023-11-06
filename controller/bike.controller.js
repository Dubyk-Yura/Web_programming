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
  // async getAllBike(req, res) {
  //   const allBikes = await db.query(`SELECT * FROM bicycles`);
  // res.json(allBikes.rows);
  // }

  // async getAllBike(req, res) {
  //   try {
  //     const { minPrice , maxPrice= Infinity, sortBy = undefined , searchInput="" } = req.query;
  //     let min;
  //     if (minPrice === "") {
  //       min = 0
  //     }
  //     else {
  //       min = parseFloat(minPrice)
  //     }

  //     let max;
  //     if (maxPrice === "") {
  //       max = 0
  //     }
  //     else {
  //       max = parseFloat(maxPrice)
  //     }
  //     // if (minPrice !== undefined || maxPrice !== undefined || searchInput !== undefined) {
  //     //   query += " WHERE ";
  //     //   const filters = [];

  //     //   if (minPrice !== undefined) {
  //     //     filters.push(`price >= ${parseFloat(minPrice)}`);
  //     //   }

  //     //   if (maxPrice !== undefined) {
  //     //     filters.push(`price <= ${parseFloat(maxPrice)}`);
  //     //   }

  //     //   if (searchInput !== undefined) {
  //     //     filters.push(`LOWER(name) LIKE LOWER('%${searchInput}%')`);
  //     //   }

  //     //   query += filters.join(" AND ");
  //     // }

  //     // if (sortBy !== undefined) {
  //     //   query += ` ORDER BY ${sortBy}`;
  //     // }

  //     const allBikes = await db.query(`SELECT * FROM bicycles WHERE bicycles.price >= $1 `,[min,max]);
  //     res.json(allBikes.rows);

  //   } catch (error) {
  //     console.error( minPrice, maxPrice, sortBy, searchInput)
  //     console.error("Помилка при отриманні байків:", error);
  //     res.status(500).json({ error: "Помилка при отриманні байків" });
  //   }
  // }

  async getAllBike(req, res) {
    try {
      const { minPrice, maxPrice, sortBy, searchInput } = req.query;
      let query = "SELECT * FROM bicycles ";
      if (minPrice !== "" || maxPrice !== "" || searchInput !== "") {
        query += " WHERE ";

        query +=
          minPrice !== ""
            ? ` price >= ${parseFloat(minPrice)} `
            : " price >= 0 ";

        query += " AND ";

        query +=
          maxPrice !== ""
            ? ` price <= ${parseFloat(maxPrice)} `
            : ` price <= ${Number.MAX_SAFE_INTEGER} `;

        query += ` AND LOWER(name) LIKE LOWER('%${searchInput}%') `;
      }

      if (sortBy !== "") {
        query += ` ORDER BY ${sortBy}`;
      }

      const filteredAndSortedBikes = await db.query(query);
      res.status(200).json(filteredAndSortedBikes.rows);
    } catch (error) {
      console.error("Помилка при отриманні байків:", error);
      res.status(500).json({ error: "Помилка при отриманні байків" });
    }
  }

  async getOneBike(req, res) {
    const id = req.params.id;
    const oneBike = await db.query(
      `SELECT * FROM bicycles WHERE bicycles.id = $1`,
      [id]
    );
    res.json(oneBike.rows[0]);
  }

  async getAllTypesOfBike(req, res) {
    const typesOfBike = await db.query(`SELECT * FROM bicycleTypes`);
    res.json(typesOfBike.rows);
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
