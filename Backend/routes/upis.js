const express = require('express');
const router = express.Router();
const { Upis } = require('../models');

router.get('/', async (req, res) => {
    const upisi = await Upis.findAll();
    res.json(upisi);
});

router.post("/create", async (req, res) => {
    const upis = req.body;

    const noviUpis = await Upis.create(upis);

    res.json(noviUpis);
});

router.post("/update", async (req, res) => {
    const upis = req.body;

    const noviUpis = await Upis.update(
    );

    res.json(noviUpis);
});

router.delete("/delete", async (req, res) => {
    const upis = req.body;

    const noviUpis = await Upis.delete(
    );

    res.json(noviUpis);
});

module.exports = router;
