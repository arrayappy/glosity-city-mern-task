const Notice = require("../models/notices");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const tasks = await Notice.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
