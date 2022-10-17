const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: [true, "email id is required"],
		unique: [true, "this email id already exist!!"],
		// validate: {
		// 	validator: () => Promise.resolve(false),
		// 	message: "this email id already used",
		// },
	},
	// gender: String,
	// contact: {
	// 	type: String,
	// 	required: true,
	// 	unique: true,
	// 	min: 10,
	// 	max: 10,
	// 	unique: [true, "this email id already exist!!"],
	// 	validate: {
	// 		validator: () => Promise.resolve(false),
	// 		message: "this number already exist !!!",
	// 	},
	// },
	password: {
		type: String,
		required: [true, "password is required"],
	},
	is_superuser: {
		type: Boolean,
		default: false,
	},
	is_staff: {
		type: Boolean,
		default: false,
	},
	// dob: Date,
	// address: String,
	// avatar: String,
});
const User = new mongoose.model("Users", userSchema);

module.exports = User;
