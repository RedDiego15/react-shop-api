const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hola mi server en express');
});

app.listen(port, () => {
	console.log('listening on port 3000');
});

routerApi(app);
