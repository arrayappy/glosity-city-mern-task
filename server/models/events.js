const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    img: {
        type: String,
    },
    date: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    }
});

module.exports = mongoose.model("events", eventSchema);
