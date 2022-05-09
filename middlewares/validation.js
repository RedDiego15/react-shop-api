const res = require("express/lib/response");
const Joi = require("joi");
const productSchema = require("../schemas/product.schema");
const boom = require("@hapi/boom");
function Validador(schema, property) {
	return (req, res, next) => {
		const data = req[property]; //le enviamos propery por que la informacion dependiando de cual sea la accion va a estar en lugares diferentes body,params etc
		const { error } =
			schema.validate(
				data
			);
		if (error) {
			next(
				boom.badRequest(
					error
				)
			);
		}
		next();
		res.status(500).json({});
	};
}
