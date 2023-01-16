import { PartialType } from '@nestjs/mapped-types';
import { CreateRestauranteDto } from './create-restaurante.dto';
import { ApiProperty } from "@nestjs/swagger";
export class UpdateRestauranteDto extends PartialType(CreateRestauranteDto) {
    @ApiProperty()
    id: string;
}
