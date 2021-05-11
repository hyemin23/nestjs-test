import { User } from './entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  private users: User[] = [];

  LoadUsers(): User[] {
    return this.users;
  }

  LoginUser(id: string): User {
    const user = this.users.find((user) => user.id === parseInt(id));

    if (!user) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return user;
  }

  CreateUser(userData) {
    return this.users.push({
      ...userData,
    });
  }

  DeleteOne(id) {
    this.LoginUser(id);
    this.users = this.users.filter((user) => user.id !== parseInt(id));
  }

  UpdateUser(updateData, userId) {
    const getIdData = this.LoginUser(userId);
    this.DeleteOne(userId);
    this.users.push({ ...getIdData, ...updateData });
  }
}
