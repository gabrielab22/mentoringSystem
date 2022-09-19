const express = require('express');
const router = express.Router();
const { Korisnik } = require('../models');

router.get('/', async (req, res) => {
    const korisnici = await Korisnik.findAll();
    res.json(korisnici);
});

router.get('/getById/:id_korisnika', async (req, res) => {
    const id = req.params.id_korisnika

    const korisnik = await Korisnik.findByPk(id);
    res.json(korisnik);
})

router.post("/create", async (req, res) => {
    const korisnik = req.body;

    const noviKorisnik = await Korisnik.create(korisnik);

    res.json(noviKorisnik);
});
router.post("/update", async (req, res) => {
    const korisnik = req.body;

    const noviKorisnik = await Korisnik.update(
    );

    res.json(noviKorisnik);
});

router.delete("/delete", async (req, res) => {
    const korisnik = req.body;

    const noviKorisnik = await Korisnik.delete(
    );

    res.json(noviKorisnik);
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const korisnik = await Korisnik.findOne({ where: { email: email } });

    if (!korisnik) res.json({ error: "Korisnik nije pronaden!" });

    const result = password.localeCompare(korisnik.password);
    if (result) res.json({ error: "Netocan email i lozinka" });

    const accessToken = sign({ email: korisnik.email, id: korisnik.id }, "gabriela");

    res.json({ accessToken, ...korisnik.dataValues });
});

module.exports = router;

module.exports = router;
