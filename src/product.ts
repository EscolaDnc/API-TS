import { Router, Request, Response } from 'express';
import { Product } from './model/product.interface';

const router = Router();

// Dados exexmplos

let products: Product[] = [
  {
    id: 1,
    nome: 'produto 01',
    preco: 10.99,
    descricao: 'Descricao do produto 01',
    categoria: 'categoria 01',
  },
  {
    id: 2,
    nome: 'produto 02',
    preco: 9.99,
    descricao: 'Descricao do produto 02',
    categoria: 'categoria 02',
  },
];

// Rota para obter todos os produtos
router.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

// Rota para obter um produto específico por ID
router.get('/products/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Produto não existe' });
  }
  res.json(product);
});

// Rota para adicionar um novo produto
router.post('/products', (req: Request, res: Response) => {
  const { id, nome, preco, descricao, categoria } = req.body;
  const newProduct: Product = {
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
router.put('/products/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { nome, preco, descricao, categoria } = req.body;
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Produto não existe' });
  }
  const updatedProduct: Product = {
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
router.delete('/products/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Produto não existe' });
  }
  products.splice(productIndex, 1);
  res.json({ message: 'Produto deletado com sucesso' });
});

module.exports = router;