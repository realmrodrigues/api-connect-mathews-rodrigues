🚀 API Connect

API REST para gerenciamento de usuários, desenvolvida como MVP utilizando Node.js e Express.






📌 Sobre o projeto

O API Connect é uma API REST simples para gerenciamento de usuários, oferecendo as principais operações de CRUD:

➕ Criar usuários
📋 Listar usuários
🔎 Buscar usuários por ID
✏️ Atualizar usuários
🗑️ Remover usuários

A API também conta com validação de dados, tratamento de erros, validação de e-mail e prevenção de e-mails duplicados.

🛠️ Tecnologias
Tecnologia	Utilização
🟢 Node.js	Runtime JavaScript
⚡ Express.js	Framework para API REST
💾 Array	Persistência em memória
📦 npm	Gerenciamento de dependências
🚀 Instalação
Pré-requisitos

Antes de começar, você precisa ter instalado:

Node.js 16+
npm
1. Clone o projeto
git clone https://github.com/realmrodrigues/backend-csv.git
cd backend-csv

2. Instale as dependências
npm install

3. Execute a aplicação
node server.js


A API estará disponível em:

http://localhost:3000

🔄 Desenvolvimento

Para utilizar o nodemon e reiniciar o servidor automaticamente:

npx nodemon server.js

📡 API

Base URL

http://localhost:3000

Endpoints disponíveis
Método	Rota	Descrição	Status
GET	/	Status da API	200
GET	/users	Lista usuários	200
GET	/users/:id	Busca usuário	200
POST	/users	Cria usuário	201
PUT	/users/:id	Atualiza usuário	200
DELETE	/users/:id	Remove usuário	204
🧪 Exemplos
GET /users

Lista todos os usuários cadastrados.

Response 200 OK
{
  "data": [
    {
      "id": 1,
      "name": "Ana Silva",
      "email": "ana.silva@email.com"
    }
  ]
}

GET /users/:id

Busca um usuário pelo seu ID.

Request
GET /users/1

Response 200 OK
{
  "data": {
    "id": 1,
    "name": "Ana Silva",
    "email": "ana.silva@email.com"
  }
}

Response 404 Not Found
{
  "error": "Usuário com ID 999 não encontrado."
}

POST /users

Cria um novo usuário.

Request
POST /users
Content-Type: application/json

{
  "name": "Mariana Oliveira",
  "email": "mariana.oliveira@email.com"
}

Response 201 Created
{
  "data": {
    "id": 3,
    "name": "Mariana Oliveira",
    "email": "mariana.oliveira@email.com"
  }
}

Response 400 Bad Request
{
  "error": "O campo \"email\" é obrigatório e deve ser uma string não vazia."
}

PUT /users/:id

Atualiza os dados de um usuário existente.

Request
PUT /users/1
Content-Type: application/json

{
  "name": "Ana Silva Atualizada",
  "email": "ana.atualizada@email.com"
}

Response 200 OK
{
  "data": {
    "id": 1,
    "name": "Ana Silva Atualizada",
    "email": "ana.atualizada@email.com"
  }
}

DELETE /users/:id

Remove um usuário pelo ID.

Request
DELETE /users/2

Response
204 No Content


A resposta 204 não possui corpo.

✅ Validações

A API possui algumas regras para garantir a consistência dos dados:

name é obrigatório
email é obrigatório
email deve possuir um formato válido
E-mails duplicados não são permitidos
IDs inválidos são rejeitados
Usuários inexistentes retornam 404
Dados inválidos retornam 400
📦 Padrão de respostas
✅ Sucesso
{
  "data": {}
}

❌ Erro
{
  "error": "Mensagem de erro."
}


A utilização de um formato padronizado facilita o consumo da API por aplicações frontend e outros clientes HTTP.

💾 Persistência

Atualmente, os dados são armazenados em memória utilizando um Array.

Isso significa que os usuários cadastrados serão perdidos quando o servidor for reiniciado.