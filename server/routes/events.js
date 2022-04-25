const Event = require("../models/events");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const tasks = await Event.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
