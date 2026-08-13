let nextId = 3;

const users = [
  { id: 1, name: 'Ana Silva', email: 'ana.silva@email.com' },
  { id: 2, name: 'Bruno Costa', email: 'bruno.costa@email.com' }
];

function generateId() {
  return nextId++;
}

module.exports = {
  users,
  generateId
};