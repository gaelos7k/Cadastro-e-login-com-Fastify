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

src/
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