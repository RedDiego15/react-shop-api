const productsRouter = require("./Routes.products");
const categoriesRouter = require("./categories");
const usersRouter = require("./users");
const express = require("express");

function routerApi(app) {
	const router = express.Router(); //router v1
	app.use("/api/v1", router);
	router.use("/products", productsRouter);
	router.use("/categories", categoriesRouter);
	router.use("/users", usersRouter);
}

module.exports = routerApi;
