import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Column, Entity } from "typeorm";

@Entity({name: 'restaurantes'})
export class Horarios {
    @Column({name: 'segunda_feira', nullable: false})
    @ApiProperty()
    @IsString()
    segunda_feira: string;

    @Column({name: 'terca_feira', nullable: false})
    @ApiProperty()
    @IsString()
    terca_feira: string;

    @Column({name: 'quarta_feira', nullable: false})
    @ApiProperty()
    @IsString()
    quarta_feira: string;

    @Column({name: 'quinta_feira', nullable: false})
    @ApiProperty()
    @IsString()
    quinta_feira: string;

    @Column({name: 'sexta_feira', nullable: false})
    @ApiProperty()
    @IsString()
    sexta_feira: string;

    @Column({name: 'sabado', nullable: false})
    @ApiProperty()
    @IsString()
    sabado: string;

    @Column({name: 'domingo', nullable: false})
    @ApiProperty()
    @IsString()
    domingo: string;
}