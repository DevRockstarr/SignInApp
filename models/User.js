var mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  name: {
		type: String,
		required: true,
	},
  email: {
    type: String,
    required: true,
  },
  telephone: {
		type: String,
		required: true,
  },
  company: {
    type: String
  },
  officialVisit: {
    type: Boolean
  },
  escort: {
    type: Boolean
  },
  escortName: {
    type: String
  },
	password: {
		type: String,
  }
});

module.exports = mongoose.model('users', UserSchema);
