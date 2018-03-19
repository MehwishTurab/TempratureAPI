const mongoose = require('mongoose');

const tempSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    temp: { type: Number, required: true }
});

module.exports = mongoose.model('Record',tempSchema);