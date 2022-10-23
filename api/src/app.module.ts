require('dotenv').config();

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Niveis } from './entity/niveis.entity';
import { NiveisModule } from './routes/niveis/niveis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Niveis],
      synchronize: true,
    }),
    NiveisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
