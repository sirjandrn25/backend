const express = require("express");
const router = express.Router();
const User = require("../models/users");

const jwt = require("jsonwebtoken");

router.use(express.json());

router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	const existingUser = await User.findOne({ email: email });
	if (!existingUser.is_superuser)
		return res.status(403).send("user is not admin");

	if (!existingUser)
		return res.status(403).send("email or password does not matched !!");
	else {
		try {
			const userId = existingUser._id.toString();

			//Creating jwt token
			token = jwt.sign(
				{ userId: userId, email: existingUser.email },
				"secretkeyappearshere",
				{ expiresIn: "1h" }
			);

			res.send({
				id: userId,
				email: existingUser.email,
				token: token,
				time: 3600,
			});
		} catch (err) {
			const error = new Error("Error! Something went wrong.");
			return res.send(error);
		}
	}
});

module.exports = router;
