import { Get, Controller, Post, Request, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/users')
  getUsers(): object {
    return { name: 'Rize', email: 'rizekishimaro@gmail.com' };
  }
  @Post('/user')
  storeUser(@Request() req: Request): object {
    return req.body;
  }
  @Get('/:userId')
  getUser(@Param() params: { userId: number }): object {
    return params;
  }
}
