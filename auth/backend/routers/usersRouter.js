const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");
require("dotenv").config();

const usersRouter = express.Router();

usersRouter.get("/", async (req, res) => {
	const users = await UserModel.find();
	res.status(200).send({ users });
});

usersRouter.post("/signup", async (req, res) => {
	try {
		const user = req.body;
		const userDoc = await UserModel.findOne({ email: user.email });
		if (userDoc) {
			res.status(400).send({ error: "user already exist" });
		} else {
			user.password = await bcrypt.hash(user.password, 3);
			const userDoc = new UserModel(user);
			await userDoc.save();
			res.status(201).send({ message: "signup successful" });
		}
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

usersRouter.post("/signin", async (req, res) => {
	try {
		const user = req.body;
		const userDoc = await UserModel.findOne({ email: user.email });
		if (userDoc) {
			const areSame = await bcrypt.compare(user.password, userDoc.password);
			if (areSame) {
				const token = jwt.sign({ userId: userDoc._id }, process.env.SECRET);
				res.status(201).send({ token });
			} else {
				res.status(400).send({ error: "wrong paasword" });
			}
		} else {
			res.status(404).send({ message: "user not found" });
		}
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

module.exports = usersRouter;
