import { ApiProperty } from "@nestjs/swagger";

export class NiveisDto {
    @ApiProperty()
    nivel: string;
}