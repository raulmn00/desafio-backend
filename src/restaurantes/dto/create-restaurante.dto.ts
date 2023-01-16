import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Column } from "typeorm";

export class CreateRestauranteDto {
    @Column({name: 'restaurante_name', nullable: false})
    @ApiProperty()
    @IsString()
    restaurante_name: string;

    @Column({name: 'restaurante_document', nullable: false})
    @ApiProperty()
    @IsString()
    restaurante_document: string;

    @Column({ name: 'restaurante_type', nullable: false })
    @ApiProperty()
    @IsString()
    restaurante_type: string;
    
    @Column({ name: 'restaurante_address', nullable: false })
    @ApiProperty()
    @IsString()
    restaurante_address: string[];
}
