import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NiveisDto } from 'src/dto/niveis.dto';
import { Niveis } from 'src/entity/niveis.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NiveisService {

    constructor(
        @InjectRepository(Niveis)
        private niveisRepository: Repository<Niveis>
    ) { }

    async listar(): Promise<NiveisDto[]> {
        return await this.niveisRepository.find();
    }

    async localizar(id: number): Promise<NiveisDto> {
        return await this.niveisRepository.findOneBy({id});
    }

    async salvar(niveisDTO: NiveisDto): Promise<NiveisDto> {
        return await this.niveisRepository.save(niveisDTO);
    }

    async deletar(id: number) {
        return await this.niveisRepository.delete(id);
    }

}
