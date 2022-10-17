const mongoose = require("mongoose");
const connection = mongoose
	.connect("mongodb://localhost:27017/inventory-management")
	.then(() => {
		console.log("successfully connect with mongodb");
	})
	.catch((error) => {
		console.log("something is wrong ", error);
	});
