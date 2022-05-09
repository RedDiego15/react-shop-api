const express = require('express');
const ProductService = require('../services/product');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
	const products = await service.find();
	res.json(products);
});

router.get('/filter', (req, resp) => {
	res.send('filter products page');
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const product = await service.findOne(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

router.post('/', async (req, res) => {
	const body = req.body;
	const product = await service.create(body);
	res.status(201).json({ product });
});

router.patch('/:id', async (req, res) => {
	const { id } = req.params;
	const body = req.body;
	const product = await service.update(id, body);
	res.json({ product });
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const rta = service.delete(id);
	res.json({ rta });
});

module.exports = router;
