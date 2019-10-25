const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public/")));

app.listen(8080, function () {
    console.log("http://localhost:8080");
});