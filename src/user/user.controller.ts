import { User } from './entities/user.entity';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //유저 전체 불러오기
  @Get('loadUsers')
  LoadUsers(): User[] {
    return this.userService.LoadUsers();
  }

  //id값으로 User정보 가져오기
  @Get(':id')
  LoginUser(@Param('id') id: string): User {
    return this.userService.LoginUser(id);
  }

  @Post('join')
  CreateUser(@Body() userData) {
    return this.userService.CreateUser(userData);
  }

  @Delete(':id')
  DeleteUser(@Param('id') id: string) {
    return this.userService.DeleteOne(id);
  }

  @Patch(':id')
  UpdateUser(@Body() updateData, @Param('id') userId: string) {
    return this.userService.UpdateUser(updateData, userId);
  }
}
