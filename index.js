import express from "express";

let app = express();

app.listen("8000", function () {
  console.log("todo ok");
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
  res.render("index");
});


// MINUTO 23:20git