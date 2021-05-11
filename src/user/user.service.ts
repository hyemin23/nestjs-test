import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  private users: User[] = [];

  LoadUsers(): User[] {
    return this.users;
  }

  LoginUser(id: number): User {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return user;
  }

  CreateUser(userData: CreateUserDto) {
    return this.users.push({
      id: this.users.length + 1,
      ...userData,
    });
  }

  DeleteOne(id: number) {
    this.LoginUser(id);
    this.users = this.users.filter((user) => user.id !== id);
  }

  UpdateUser(updateData: UpdateUserDto, userId: number) {
    const getIdData = this.LoginUser(userId);
    this.DeleteOne(userId);
    this.users.push({ ...getIdData, ...updateData });
  }
}
