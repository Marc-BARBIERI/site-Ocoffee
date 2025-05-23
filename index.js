require("dotenv").config();
const express = require("express");
const path = require("node:path");
const app = express();

const router = require("./app/router");

// Configuration moteur de template
app.set("view engine", "ejs");
app.set("views", "app/views");

const securedPathToViews = path.join(__dirname, "app/views");
app.set("views", securedPathToViews);

const securedPathToAssets = path.join(__dirname, "public");
app.use(express.static(securedPathToAssets));

app.use(express.urlencoded({ extended: true }));

app.use(router);

// * Last Middleware 404
const notFound = require("./app/middlewares/404.js");
app.use(notFound);

const port = process.env.PORT || 3010;

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
