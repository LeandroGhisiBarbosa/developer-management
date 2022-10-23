import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NiveisDto } from 'src/dto/niveis.dto';
import { NiveisService } from './niveis.service';
import { Response } from 'express';
import { validate } from 'class-validator';

@Controller('niveis')
@ApiTags('niveis')
export class NiveisController {

    constructor(private readonly niveisService: NiveisService) { }

    @Get()
    async listar(): Promise<NiveisDto[]> {
        return await this.niveisService.listar();
    }

    @Get(':id')
    async localiar(@Param('id') id: number, @Res() response: Response) {
        try {
            let niveis = await this.niveisService.localizar(id);
            if (niveis) {
                return response.status(HttpStatus.OK).json(niveis);
            } else {
                return response.status(HttpStatus.NO_CONTENT).send();
            }
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).send(error);
        }
    }

    @Post()
    async salvar(@Body() niveisDTO: NiveisDto, @Res() response: Response): Promise<any> {
        try {
            const errors = await validate(niveisDTO);
            if (errors.length > 0) {
                return response.status(HttpStatus.BAD_REQUEST).send(errors);
            }
            return response.status(HttpStatus.CREATED).json(await this.niveisService.salvar(niveisDTO));
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).send(error);
        }
    }

    @Delete(':id')
    async deletar(@Param('id') id: number, @Res() response: Response) {
        try {
            return response.status(HttpStatus.CREATED).json(await this.niveisService.deletar(id));
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).send(error);
        }
    }

}
