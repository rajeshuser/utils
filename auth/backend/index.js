const express = require("express");
const cors = require("cors");
const UserModel = require("./models/UserModel");
const usersRouter = require("./routers/usersRouter");
const connection = require("./database");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);

app.get("/", async (req, res) => {
	res.status(200).send({ message: "home" });
});

connectThenListen();

async function connectThenListen() {
	try {
		await connection;
		console.log("app is connected to database");
		await app.listen(process.env.PORT);
		console.log("app is listening at", `http://localhost:${process.env.PORT}`);
	} catch (error) {
		console.log({ error: error.message });
	}
}
