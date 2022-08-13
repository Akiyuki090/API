const express = require("express");
const route = express.Router();
const conn = require("../database/ConfigDatabase");

route.get("/", (req, res) => {
  const sql = " SELECT * FROM clientes";

  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.json(data);
  });
});

route.post("/", (req, res) => {
  const name = req.body.name;
  const age = req.body.idade;

  const sql = `INSERT INTO clientes (name, idade) VALUES ('${name}', '${age}')`;

  conn.query(sql, (err) => {
    if (err) {
      console.log(err);
    }
    res.status(201);
    res.redirect("/");
  });
});

route.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM clientes WHERE id = ${id}`;

  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

module.exports = route;
