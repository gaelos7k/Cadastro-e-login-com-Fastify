import { UserRepository } from "../domain/repositories/UserRepository";
import { PasswordHasher } from "../infrastructure/security/PasswordHasher";
import { JwtService } from "../infrastructure/security/JwtService";

export class LoginUser {
  constructor(
    private userRepo: UserRepository,
    private hasher: PasswordHasher,
    private jwt: JwtService
  ) {}

  async execute(email: string, password: string): Promise<string> {
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new Error("Credenciais inválidas");

    return this.jwt.sign({ userId: user.id, email: user.email });
  }
}
