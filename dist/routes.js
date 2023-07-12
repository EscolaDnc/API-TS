"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
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
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
});
// Criar um novo usuário
router.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});
// Atualizar informações de um usuário
router.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    const updatedUser = { id, name, email };
    users[userIndex] = updatedUser;
    res.status(200).json(updatedUser);
});
// Excluir um usuário
router.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(200).json({ message: 'User deleted successfully' });
});
exports.default = router;
