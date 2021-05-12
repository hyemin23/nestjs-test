import { UsersModule } from './user/users.module';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
