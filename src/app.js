const express = require("express");
const app = express();

//database connection
require("./db/connection");

// import routes
const user_routes = require("./routes/users");
const auth_routes = require("./routes/auth");

//bind routes
app.use("/users", user_routes);
app.use("/auth", auth_routes);

// respond with "hello world" when a GET request is made to the homepage
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(port, () => {
	console.log("server running");
});
