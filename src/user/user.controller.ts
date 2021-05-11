import { CreateUserDto } from './dto/create-user.dto';
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
  LoginUser(@Param('id') id: number): User {
    return this.userService.LoginUser(id);
  }

  @Post('join')
  CreateUser(@Body() userData: CreateUserDto) {
    return this.userService.CreateUser(userData);
  }

  @Delete(':id')
  DeleteUser(@Param('id') id: number) {
    return this.userService.DeleteOne(id);
  }

  @Patch(':id')
  UpdateUser(@Body() updateData, @Param('id') userId: number) {
    return this.userService.UpdateUser(updateData, userId);
  }
}
