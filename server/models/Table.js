const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    name: {type: String, required: true},
    capacity: {type: Number, required: true},
    available: {type: Boolean, default: true},
})

module.exports = mongoose.model('Table', tableSchema);