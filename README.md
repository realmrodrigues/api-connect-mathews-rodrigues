# API Connect - Gerenciamento de Usuários

API REST simples e funcional para gerenciamento de usuários, desenvolvida como MVP (Produto Mínimo Viável).

## 🎯 Objetivo

Fornecer um conjunto completo de endpoints RESTful para realizar as operações básicas de CRUD (Create, Read, Update e Delete) de usuários, com validação de entrada, tratamento de erros e respostas padronizadas em JSON.

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- Persistência em memória (array)

## 📋 Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- npm (já incluso no Node.js)

## 🚀 Como executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/realmrodrigues/backend-csv.git
cd backend-csv

Instale as dependências:

Bashnpm install

Inicie o servidor:

Bashnode server.js

A API estará disponível em:

texthttp://localhost:3000
Dica: Para desenvolvimento, utilize npx nodemon server.js para reinício automático.
📡 Endpoints
Base URL
texthttp://localhost:3000

MétodoEndpointDescriçãoStatus de SucessoGET/Status da API200GET/usersLista todos os usuários200GET/users/:idBusca usuário por ID200POST/usersCria um novo usuário201PUT/users/:idAtualiza um usuário200DELETE/users/:idRemove um usuário204

Exemplos de Requisições
1. Listar todos os usuários
httpGET /users
Resposta (200 OK):
JSON{
  "data": [
    {
      "id": 1,
      "name": "Ana Silva",
      "email": "ana.silva@email.com"
    }
  ]
}
2. Buscar usuário por ID
httpGET /users/1
Resposta de sucesso (200 OK):
JSON{
  "data": {
    "id": 1,
    "name": "Ana Silva",
    "email": "ana.silva@email.com"
  }
}
Resposta de erro (404 Not Found):
JSON{
  "error": "Usuário com ID 999 não encontrado."
}
3. Criar novo usuário
httpPOST /users
Content-Type: application/json

{
  "name": "Mariana Oliveira",
  "email": "mariana.oliveira@email.com"
}
Resposta de sucesso (201 Created):
JSON{
  "data": {
    "id": 3,
    "name": "Mariana Oliveira",
    "email": "mariana.oliveira@email.com"
  }
}
Resposta de erro (400 Bad Request):
JSON{
  "error": "O campo \"email\" é obrigatório e deve ser uma string não vazia."
}
4. Atualizar usuário
httpPUT /users/1
Content-Type: application/json

{
  "name": "Ana Silva Atualizada",
  "email": "ana.atualizada@email.com"
}
Resposta (200 OK):
JSON{
  "data": {
    "id": 1,
    "name": "Ana Silva Atualizada",
    "email": "ana.atualizada@email.com"
  }
}
5. Remover usuário
httpDELETE /users/2
Resposta: 204 No Content (sem corpo)

✅ Validações implementadas

Campos name e email obrigatórios
Validação de formato de e-mail
Impedimento de e-mails duplicados
Tratamento de ID inválido ou inexistente
Respostas padronizadas com as chaves data (sucesso) e error (falha)

📝 Observações

Os dados são armazenados em memória. Ao reiniciar o servidor, os registros voltam ao estado inicial.
Esta é uma versão MVP, ideal para estudos e prototipagem.