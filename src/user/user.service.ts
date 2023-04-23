import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  get(): Promise<User[]> {
    return this.userRepo.find();
  }
  update(param: number, updateDto: User): object {
    return this.userRepo.update(param, updateDto);
  }
  createUser(param: object): any {
    console.log(param);
    return this.userRepo.save(param);
  }
  getUser(params: any): object | number {
    return this.userRepo.findOne({ where: { id: params } });
  }
  deleteUser(params: number): object | number {
    return this.userRepo.delete(params);
  }
}
