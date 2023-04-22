import { Injectable, Request } from '@nestjs/common';

@Injectable()
export class UserService {
  get(): object {
    return { name: 'rize', message: 'heee he!' };
  }
  update(param: number): object {
    return {
      id: param,
      name: 'Rize',
      email: 'rize@gmail.com',
    };
  }
  getUser(params: number): object | number {
    return {
      id: params,
      name: 'Hitoshi Misaki',
      email: 'hitoshi@gmail.com',
    };
  }
}
