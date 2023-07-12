"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// dados exemplos
let users = [
    { id: 1, nome: 'Luciano Santos', email: 'luciano@dnc.com' },
    { id: 2, nome: 'Babi dev', email: 'Babi@dnc.com' },
];
// Listar todos os usuários
router.get('/users', (req, res) => {
    res.status(200).json(users);
});
// Obter informações de um usuário específico
router.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({ error: 'Usuário não existe' });
    }
    res.status(200).json(user);
});
// Criar um novo usuário
router.post('/users', (req, res) => {
    const { id, nome, email } = req.body;
    const newUser = { id, nome, email };
    users.push(newUser);
    res.status(201).json(newUser);
});
// Atualizar informações de um usuário
router.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const { nome, email } = req.body;
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuário não existe' });
    }
    const updatedUser = { id, nome, email };
    users[userIndex] = updatedUser;
    res.status(200).json(updatedUser);
});
// Excluir um usuário
router.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuário não existe' });
    }
    users.splice(userIndex, 1);
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
});
exports.default = router;
