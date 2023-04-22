import {
  Get,
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { getUser } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers(): object {
    return this.userService.get();
  }
  @Post()
  storeUser(@Body() req: getUser): object {
    return req;
  }
  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }
  @Patch('/:userId')
  updateUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.update(userId);
  }
}
