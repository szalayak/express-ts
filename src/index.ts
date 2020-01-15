import express from "express";
import moment from "moment";

const app = express();
const port = 8080;

app.get("/", (req, res) => res.send(`Hello World! It's ${moment().format("dddd Do MMMM YYYY, hh:mm:ss")}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));