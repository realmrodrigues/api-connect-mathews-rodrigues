const { users, generateId } = require('../data/users');

function listUsers(req, res) {
  return res.status(200).json({ data: users });
}

function getUserById(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: 'O ID informado é inválido. Deve ser um número.'
    });
  }

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      error: `Usuário com ID ${id} não encontrado.`
    });
  }

  return res.status(200).json({ data: user });
}

function createUser(req, res) {
  const { name, email } = req.body;

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: 'O corpo da requisição está vazio. Envie um JSON com "name" e "email".'
    });
  }

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({
      error: 'O campo "name" é obrigatório e deve ser uma string não vazia.'
    });
  }

  if (!email || typeof email !== 'string' || email.trim() === '') {
    return res.status(400).json({
      error: 'O campo "email" é obrigatório e deve ser uma string não vazia.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'O campo "email" deve conter um endereço de e-mail válido.'
    });
  }

  const emailAlreadyExists = users.some(
    u => u.email.toLowerCase() === email.toLowerCase()
  );

  if (emailAlreadyExists) {
    return res.status(400).json({
      error: 'Já existe um usuário cadastrado com este e-mail.'
    });
  }

  const newUser = {
    id: generateId(),
    name: name.trim(),
    email: email.trim().toLowerCase()
  };

  users.push(newUser);

  return res.status(201).json({ data: newUser });
}

function updateUser(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: 'O ID informado é inválido. Deve ser um número.'
    });
  }

  const { name, email } = req.body;

  if (!name && !email) {
    return res.status(400).json({
      error: 'Informe ao menos um campo para atualização (name ou email).'
    });
  }

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: `Usuário com ID ${id} não encontrado.`
    });
  }

  if (name) users[index].name = name.trim();
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'O campo "email" deve conter um endereço de e-mail válido.'
      });
    }
    users[index].email = email.trim().toLowerCase();
  }

  return res.status(200).json({ data: users[index] });
}

function deleteUser(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: 'O ID informado é inválido. Deve ser um número.'
    });
  }

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: `Usuário com ID ${id} não encontrado.`
    });
  }

  users.splice(index, 1);
  return res.status(204).send();
}

module.exports = {
  listUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};