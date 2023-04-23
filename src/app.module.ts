import { Module } from '@nestjs/common';
import { AppController } from './app.controllers';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/entity/user.entity';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config.env',
    }),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME,
      port: 3306,
      username: process.env.NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
