import { Body, Controller, Get, Request } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  publicResource(@Body() req: Request) {
    return { result: req };
  }
}
