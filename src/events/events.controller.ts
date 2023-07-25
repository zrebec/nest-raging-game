import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DriverDto } from './dto/driver.dto';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'Firt driver' },
      { id: 2, name: 'Second driver' },
    ];
  }

  @Post()
  addDriver(@Body() driver: DriverDto) {
    return {
      statusCode: 200,
      statusMessage: 'Sucessfully created',
      data: driver,
    };
  }

  @Patch(':id')
  update(@Param('id') id: number) {
    return { statusCode: 201, message: `Updated item with ID '${id}'` };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { statusCode: 201, message: `Deleted item with ID '${id}'` };
  }
}
