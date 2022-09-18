const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routers
const korisniciRouter = require('./routes/korisnici');
app.use("/korisnici", korisniciRouter);

const predmetiRouter = require('./routes/predmeti');
app.use("/predmeti", predmetiRouter);

const upisiRouter = require('./routes/upis');
app.use("/upisi", upisiRouter);


//DB Connection
require("./database/connection");

db.sequelize.authenticate().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on: http://localhost:${PORT}`);
    });
});