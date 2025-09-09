import { FastifyInstance } from "fastify";
import { RegisterUser } from "@usecases/RegisterUser";
import { LoginUser } from "@usecases/LoginUser";
import { InMemoryUserRepository } from "@infrastructure/InMemoryUserRepository";
import { PasswordHasher } from "@infrastructure/security/PasswordHasher";
import { JwtService } from "@infrastructure/security/JwtService";

const userRepo = new InMemoryUserRepository();
const hasher = new PasswordHasher();
const jwt = new JwtService("super-secret-key");

const registerUser = new RegisterUser(userRepo, hasher);
const loginUser = new LoginUser(userRepo, hasher, jwt);

export async function userRoutes(app: FastifyInstance) {
  app.post("/register", async (req, reply) => {
    const { email, password } = req.body as { email: string; password: string };
    try {
      const user = await registerUser.execute(email, password);
      reply.send({ id: user.id, email: user.email });
    } catch (err: any) {
      reply.status(400).send({ error: err.messade });
    }
  });

  app.post("/login", async (req, reply) => {
    const { email, password } = req.body as { email: string; password: string };
    try {
      const token = await loginUser.execute(email, password);
      reply.send({ token });
    } catch (err: any) {
      reply.status(400).send({ error: err.message });
    }
  });

  app.get("/users", async (req, reply) => {
    try {
      const users = (userRepo as any).users || [];
      reply.send(users);
    } catch (err: any) {
      reply.status(500).send({ error: err.message });
    }
  });
}
