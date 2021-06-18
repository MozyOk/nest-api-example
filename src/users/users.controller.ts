import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserPropertyDto } from './dto/user-property.dto';
import { UserStatusPipe } from './pipe/user-status.pipe';

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
  @UsePipes(ValidationPipe)
  createUser(@Body() userPropertyDto: UserPropertyDto) {
    const { name, desc } = userPropertyDto;
    return `createUser Success! Params [name:${name}, desc:${desc}]`;
  }

  @Delete('/:id')
  deleteUsers(@Param('id', ParseIntPipe) id: number) {
    return `deleteUsers Success! Params [id:${id}s]`;
  }

  @Patch('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', UserStatusPipe) status: string,
  ) {
    return `updateUser Success! Params [id:${id}, status:${status}]`;
  }
}
