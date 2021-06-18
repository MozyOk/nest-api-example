import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'GetUsers Success!';
  }

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return `getUserById Success! Params [id:${id}]`;
  }

  @Post()
  createUser(@Body('name') name: string, @Body('desc') desc: string) {
    return `createUser Success! Params [name:${name}, desc:${desc}]`;
  }

  @Delete('/:id')
  deleteUsers(@Param('id', ParseIntPipe) id: number) {
    return `deleteUsers Success! Params [id:${id}s]`;
  }

  @Patch('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: string,
  ) {
    return `updateUser Success! Params [id:${id}, status:${status}]`;
  }
}
