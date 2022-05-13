const boom = require("@hapi/boom");
function validatorHandler(schema, property) {
	return (req, res, next) => {
		const data = req[property]; //le enviamos propery por que la informacion dependiando de cual sea la accion va a estar en lugares diferentes body,params etc
		const { error } =
			schema.validate(
				data,
				{
					abortEarly: false,
				}
			);
		if (error) {
			next(
				boom.badRequest(
					error
				)
			);
		}
		next();
	};
}

module.exports = validatorHandler;
