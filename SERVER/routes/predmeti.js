const express = require('express');
const router = express.Router();
const { Predmet } = require('../models');

router.get('/', async (req, res) => {
    const listpredmeti = await Predmet.findAll();
    res.json(listpredmeti);
});

router.post("/Create", async (req, res) => {
    const predmet = req.body;

    const noviPredmet = await Predmet.create(predmet);

    res.json(noviPredmet);
});

router.post("/update", async (req, res) => {
    const predmet = req.body;

    const noviPredmet = await Predmet.update(
    );

    res.json(noviPredmet);
});

router.delete("/delete", async (req, res) => {
    const predmet = req.body;

    const noviPredmet = await Predmet.delete(
    );

    res.json(noviPredmet);
});

module.exports = router;
