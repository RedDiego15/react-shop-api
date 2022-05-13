const productsRouter = require("./products.router");
const categoriesRouter = require("./categories.router");
const usersRouter = require("./users.router");
const express = require("express");

function routerApi(app) {
	const router = express.Router(); //router v1
	app.use("/api/v1", router);
	router.use("/products", productsRouter);
	router.use("/categories", categoriesRouter);
	router.use("/users", usersRouter);
}

module.exports = routerApi;
