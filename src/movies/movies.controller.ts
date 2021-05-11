import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'allmost';
  }

  @Get('/:id')
  getHi(@Param('id') id: string) {
    return `this is id ${id}`;
  }
}
