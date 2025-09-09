import { UserRepository } from "@domain/repositories/UserRepository";
import { PasswordHasher } from "@infrastructure/security/PasswordHasher";
import { User } from "@domain/entities/User";
import { randomUUID } from "crypto";

export class RegisterUser {
  constructor(
    private userRepo: UserRepository,
    private hasher: PasswordHasher
  ) { }

  async execute(email: string, password: string): Promise<User> {
    const existing = await this.userRepo.findByEmail(email);
    if (existing) {
      throw new Error("Usuário já existe");
    }

    const hashedPassword = await this.hasher.hash(password);
    const user: User = { id: randomUUID(), email, password: hashedPassword };

    await this.userRepo.save(user);
    return user;
  }
}
