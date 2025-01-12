import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entiti';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  create(username: string, password: string): User {
    const user = { id: this.idCounter++, username, password };
    this.users.push(user);
    return user;
  }

  findByUsername(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }
}

