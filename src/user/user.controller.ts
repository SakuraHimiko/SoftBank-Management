import {
  Get,
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers(): object {
    return this.userService.get();
  }
  @Post()
  storeUser(@Body() req: createUserDto): any {
    return this.userService.createUser(req);
  }
  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }
  @Patch('/:userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() req: updateUserDto,
  ): any {
    return this.userService.update(userId, req);
  }
  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
}
