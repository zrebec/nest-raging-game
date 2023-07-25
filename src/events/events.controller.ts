import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EventCreateDto } from './dto/event-create';
import { EventUpdateDto } from './dto/event-update';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'Firt driver' },
      { id: 2, name: 'Second driver' },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return { statusCode: 200, message: `Found item with ID '${id}'` };
  }

  @Post()
  create(@Body() driver: EventCreateDto) {
    return driver;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() driver: EventUpdateDto) {
    return driver;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { statusCode: 201, message: `Deleted item with ID '${id}'` };
  }
}
