const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noticesSchema = new Schema({
    date: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    cat: {
        type: String,
    },
    color:{
        type: String,
    }
});

module.exports = mongoose.model("notices", noticesSchema);
