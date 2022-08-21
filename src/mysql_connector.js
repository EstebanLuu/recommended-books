import mysql from "mysql";

const connector = mysql.createConnection({
  host: "localhost",
  user: "anonymous",
  password: "1234",
  database: "books",
});

const connection = () => {
  connector.connect((err) => {
    if (err) throw err;
    console.log("Aplicación ok!");
  });
};

export { connection };
