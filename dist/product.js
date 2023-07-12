"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Dados exexmplos
let products = [
    {
        id: 1,
        nome: 'Product 1',
        preco: 10.99,
        descricao: 'descricao of Product 1',
        categoria: 'categoria 1',
    },
    {
        id: 2,
        nome: 'Product 2',
        preco: 19.99,
        descricao: 'descricao of Product 2',
        categoria: 'categoria 2',
    },
];
// Rota para obter todos os produtos
router.get('/products', (req, res) => {
    res.json(products);
});
// Rota para obter um produto específico por ID
router.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((product) => product.id === id);
    if (!product) {
        return res.status(404).json({ error: 'Produto não existe' });
    }
    res.json(product);
});
// Rota para adicionar um novo produto
router.post('/products', (req, res) => {
    const { id, nome, preco, descricao, categoria } = req.body;
    const newProduct = {
        id,
        nome,
        preco,
        descricao,
        categoria,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});
// Rota para atualizar um produto existente
router.put('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const { nome, preco, descricao, categoria } = req.body;
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Produto não existe' });
    }
    const updatedProduct = {
        id,
        nome,
        preco,
        descricao,
        categoria,
    };
    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
});
// Rota para excluir um produto
router.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Produto não existe' });
    }
    products.splice(productIndex, 1);
    res.json({ message: 'Produto deletado com sucesso' });
});
module.exports = router;
