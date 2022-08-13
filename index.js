const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const conn = require("./database/ConfigDatabase");
const router = require("./config/routes");

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(router);

conn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Conectou ao banco");
  app.listen(port, () => {
    console.log(`Conectou à porta: ${port}`);
  });
});
