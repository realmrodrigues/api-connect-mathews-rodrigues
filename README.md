API Connect — Gerenciamento de Usuários

API REST simples e funcional para gerenciamento de usuários, desenvolvida como um MVP (Produto Mínimo Viável).

O projeto disponibiliza endpoints RESTful para operações de CRUD (Create, Read, Update e Delete), com validação de dados, tratamento de erros e respostas padronizadas em JSON.

🎯 Objetivo

O objetivo do projeto é fornecer uma API REST básica para gerenciamento de usuários, permitindo:

Criar novos usuários
Listar usuários cadastrados
Consultar um usuário por ID
Atualizar dados de um usuário
Remover usuários
Validar dados de entrada
Impedir e-mails duplicados
Retornar respostas padronizadas
🛠️ Tecnologias utilizadas
Node.js
Express.js
JavaScript
Persistência em memória (Array)
📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

Node.js
 16 ou superior
npm — incluído na instalação do Node.js

Para verificar as versões instaladas:

node --version
npm --version

🚀 Como executar localmente
1. Clone o repositório
git clone https://github.com/realmrodrigues/backend-csv.git

2. Acesse o diretório do projeto
cd backend-csv

3. Instale as dependências
npm install

4. Inicie o servidor
node server.js


A API estará disponível em:

http://localhost:3000

💡 Desenvolvimento

Para reiniciar automaticamente o servidor durante o desenvolvimento, você pode utilizar o nodemon:

npx nodemon server.js

📡 Endpoints

Base URL:

http://localhost:3000

Método	Endpoint	Descrição	Status
GET	/	Verifica o status da API	200
GET	/users	Lista todos os usuários	200
GET	/users/:id	Busca um usuário por ID	200
POST	/users	Cria um novo usuário	201
PUT	/users/:id	Atualiza um usuário	200
DELETE	/users/:id	Remove um usuário	204
🧪 Exemplos de requisições
1. Verificar o status da API

Requisição:

GET /


Resposta — 200 OK:

{
  "message": "API funcionando!"
}

2. Listar todos os usuários

Requisição:

GET /users


Resposta — 200 OK:

{
  "data": [
    {
      "id": 1,
      "name": "Ana Silva",
      "email": "ana.silva@email.com"
    }
  ]
}

3. Buscar usuário por ID

Requisição:

GET /users/1


Resposta — 200 OK:

{
  "data": {
    "id": 1,
    "name": "Ana Silva",
    "email": "ana.silva@email.com"
  }
}

Usuário não encontrado

Resposta — 404 Not Found:

{
  "error": "Usuário com ID 999 não encontrado."
}

4. Criar um novo usuário

Requisição:

POST /users
Content-Type: application/json


Body:

{
  "name": "Mariana Oliveira",
  "email": "mariana.oliveira@email.com"
}


Resposta — 201 Created:

{
  "data": {
    "id": 3,
    "name": "Mariana Oliveira",
    "email": "mariana.oliveira@email.com"
  }
}

Exemplo de erro de validação

Resposta — 400 Bad Request:

{
  "error": "O campo \"email\" é obrigatório e deve ser uma string não vazia."
}

5. Atualizar um usuário

Requisição:

PUT /users/1
Content-Type: application/json


Body:

{
  "name": "Ana Silva Atualizada",
  "email": "ana.atualizada@email.com"
}


Resposta — 200 OK:

{
  "data": {
    "id": 1,
    "name": "Ana Silva Atualizada",
    "email": "ana.atualizada@email.com"
  }
}

6. Remover um usuário

Requisição:

DELETE /users/2


Resposta — 204 No Content

A resposta não possui corpo.

✅ Validações

A API possui as seguintes validações:

name e email são obrigatórios
Os campos devem possuir valores válidos
O e-mail deve possuir formato válido
Não é permitido cadastrar e-mails duplicados
IDs devem ser válidos
IDs inexistentes retornam 404 Not Found
Erros de entrada retornam 400 Bad Request
Respostas de sucesso utilizam a chave data
Respostas de erro utilizam a chave error
📦 Formato das respostas
Sucesso

As operações que retornam dados utilizam o formato:

{
  "data": {}
}

Erro

As operações que resultam em erro utilizam:

{
  "error": "Mensagem de erro."
}


Essa padronização facilita o consumo da API por aplicações frontend e outros clientes HTTP.

💾 Persistência dos dados

Atualmente, os usuários são armazenados em memória utilizando um Array.

Isso significa que:

⚠️ Os dados são perdidos sempre que o servidor é reiniciado.

Essa abordagem foi escolhida por se tratar de um MVP, mantendo o projeto simples e focado na implementação dos endpoints e das regras básicas da API.