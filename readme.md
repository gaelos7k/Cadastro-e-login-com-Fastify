# Cadastro e Login com Fastify e Clean Architecture

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

Exemplo de aplicação em **Node.js** utilizando **Fastify**, **TypeScript** e **Clean Architecture** para cadastro e login de usuários com **JWT**.

---

## 💻 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [bcrypt](https://www.npmjs.com/package/bcrypt) — hash de senhas
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) — autenticação JWT
- [ts-node](https://www.npmjs.com/package/ts-node) — execução de TypeScript em dev

---

## 📂 Estrutura do Projeto

```src/
├─ domain/
│ ├─ entities/User.ts
│ └─ repositories/UserRepository.ts
├─ usecases/
│ ├─ RegisterUser.ts
│ └─ LoginUser.ts
├─ infrastructure/
│ ├─ repositories/InMemoryUserRepository.ts
│ └─ security/
│ ├─ PasswordHasher.ts
│ └─ JwtService.ts
├─ interfaces/
│ └─ http/UserController.ts
└─ server.ts
```

---

## 🚀 Funcionalidades

- Cadastro de usuário (`POST /register`)
- Login de usuário (`POST /login`)
- Retorno de **JWT** ao realizar login
- Listagem de usuários para debug (`GET /users`) — ⚠️ apenas em desenvolvimento
- Rotas protegidas com JWT

---

## ⚡ Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/gaelos7k/Cadastro-e-login-com-Fastify
```
2. Instale as dependências:
```
npm install
```
3. Rodar em desenvolvimento (com ts-node):
```
npm run dev
```
4. Rodar em produção (com build):
```
npm run build
npm start
```

## 📝 Endpoints

1. Cadastro de usuário:

```
POST /register
```
2. Login de usuário:
```
POST /login
```
3. Listar usuários (apenas para debug):
```
GET /users
```
## 🔒 Segurança
1. Senhas são armazenadas com hash usando bcrypt.

2. JWT é usado para autenticação de rotas protegidas.

## 📄 Licença
 * *MIT License © Gabriel Henrique*