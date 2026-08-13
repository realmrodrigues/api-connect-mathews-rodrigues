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
git clone https://github.com/realmrodrigues/api-connect-mathews-rodrigues.git
cd api-connect-mathews-rodrigues
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm start
```

4. A API estará disponível em:
```
http://localhost:3000
```

> Dica: Para desenvolvimento, utilize `npm run dev` para reinício automático.

## 📡 Endpoints

### Base URL
```
http://localhost:3000
```

| Método   | Endpoint       | Descrição                    | Status de Sucesso |
|----------|----------------|------------------------------|-------------------|
| `GET`    | `/`            | Status da API                | 200               |
| `GET`    | `/users`       | Lista todos os usuários      | 200               |
| `GET`    | `/users/:id`   | Busca usuário por ID         | 200               |
| `POST`   | `/users`       | Cria um novo usuário         | 201               |
| `PUT`    | `/users/:id`   | Atualiza um usuário          | 200               |
| `DELETE` | `/users/:id`   | Remove um usuário            | 204               |

---

### Exemplos de Requisições

#### 1. Listar todos os usuários
```http
GET /users
```

**Resposta (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Ana Silva",
      "email": "ana.silva@email.com"
    }
  ]
}
```

#### 2. Buscar usuário por ID
```http
GET /users/1
```

**Resposta de sucesso (200 OK):**
```json
{
  "data": {
    "id": 1,
    "name": "Ana Silva",
    "email": "ana.silva@email.com"
  }
}
```

**Resposta de erro (404 Not Found):**
```json
{
  "error": "Usuário com ID 999 não encontrado."
}
```

#### 3. Criar novo usuário
```http
POST /users
Content-Type: application/json

{
  "name": "Mariana Oliveira",
  "email": "mariana.oliveira@email.com"
}
```

**Resposta de sucesso (201 Created):**
```json
{
  "data": {
    "id": 3,
    "name": "Mariana Oliveira",
    "email": "mariana.oliveira@email.com"
  }
}
```

**Resposta de erro (400 Bad Request):**
```json
{
  "error": "O campo \"email\" é obrigatório e deve ser uma string não vazia."
}
```

#### 4. Atualizar usuário
```http
PUT /users/1
Content-Type: application/json

{
  "name": "Ana Silva Atualizada",
  "email": "ana.atualizada@email.com"
}
```

**Resposta (200 OK):**
```json
{
  "data": {
    "id": 1,
    "name": "Ana Silva Atualizada",
    "email": "ana.atualizada@email.com"
  }
}
```

#### 5. Remover usuário
```http
DELETE /users/2
```

**Resposta:** `204 No Content` (sem corpo)

---

## ✅ Validações implementadas

- Campos `name` e `email` obrigatórios
- Validação de formato de e-mail
- Impedimento de e-mails duplicados
- Tratamento de ID inválido ou inexistente
- Respostas padronizadas com as chaves `data` (sucesso) e `error` (falha)

## 📝 Observações

- Os dados são armazenados **em memória**. Ao reiniciar o servidor, os registros voltam ao estado inicial.
- Esta é uma versão MVP, ideal para estudos e prototipagem.

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.