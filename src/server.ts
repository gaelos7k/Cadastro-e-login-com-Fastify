import Fastify from "fastify";
import { userRoutes } from "./interfaces/http/UserController";

async function start() {
    const app = Fastify();

    app.register(userRoutes);

    await app.listen({ port: 3000 });
    console.log("Server rodando em http://localhost:3000");
}

start();