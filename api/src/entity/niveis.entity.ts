import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Niveis {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @IsNotEmpty({ message: "Nível é obrigatório!"})
    @ApiProperty()
    nivel: string

}