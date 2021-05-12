import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getHone() {
    return 'home page';
  }
}
