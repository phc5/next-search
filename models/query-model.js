const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
	query: {
		type: String,
		required: true
	}
});

const Query = mongoose.model('Query', QuerySchema);

module.exports = Query;