import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Niveis } from 'src/entity/niveis.entity';
import { NiveisController } from './niveis.controller';
import { NiveisService } from './niveis.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Niveis])
    ],
    controllers: [NiveisController],
    providers: [NiveisService]
})
export class NiveisModule { }
