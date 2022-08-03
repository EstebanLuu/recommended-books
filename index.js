import express from "express";
import { connection } from "./src/mysql_connector.js";

let app = express();

app.listen("8000", function () {
  console.log("aplicacion bien");
});

// Configuración pug

app.set("views", "./vistas");
app.set("view engine", "pug");

//Configuración de archivos estaticos

app.use(express.static("./vistas"));
app.use(express.static("./src"));
app.use(express.static("./css"));

app.get("/", function (req, res) {
  //   res.send("Aplicación ok");
  connection();
  res.render("index");
});

// Minuto 38 wachinnnn
