const express = require("express");
const routerApi = require("./routes/index");
//const cors = require("cors");
const {
	logErrors,
	errorHandler,
	boomErrorHandler,
} = require("./middlewares/error");

const app = express();
const port = process.env.Port || 3000;

app.use(express.json()); //for recive information in json
const whiteList = ["https://localhost:5500", "https://myapp.com"];
const options = {
	origin: (origin, callback) => {
		if (
			whiteList.includes(
				origin
			)
		) {
			callback(
				null,
				true
			);
		} else {
			callback(
				new Error(
					"permission denied"
				)
			);
		}
	},
};
//app.use(cors());
//app.use(cors(options)); //for only acces from the whiteList

app.get("/", (req, res) => {
	res.send("Hola mi server en express");
});
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
