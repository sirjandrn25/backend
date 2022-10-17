const express = require("express");
const router = express.Router();
const User = require("../models/users");
router.use(express.json());

//read many users
router.get("/", async (req, res) => {
	const users = await User.find();
	res.send(users);
});
//create one users
router.post("/", async (req, res) => {
	try {
		const new_user = await User({
			...req.body,
		});

		const result = await new_user.save();
		res.status(200).send(result);
	} catch (err) {
		res.status(400).send(err);
	}
});

//read one user by id
router.get("/:id", async (req, res) => {
	try {
		const { id: _id } = req.params;

		const user = await User.findOne({ _id });
		res.status(200).send(user);
	} catch (error) {
		res.status(404).send({ detail: "not found" });
	}
});

//update one user by id
router.patch("/:id", async (req, res) => {
	try {
		const { id: _id } = req.params;
		const update_user = await User.findOneAndUpdate(
			{ _id },
			{ $set: { ...req.body } },
			{ new: true }
		);
		res.status(200).send(update_user);
	} catch (error) {
		res.status(404).send({ detail: "not found" });
	}
});

//delete one user by id
router.delete("/:id", async (req, res) => {
	try {
		const { id: _id } = req.params;
		await User.deleteOne({ _id });
		res.status(204).send("successfully delete");
	} catch (error) {
		res.status(404).send({ detail: "not found" });
	}
});

module.exports = router;
