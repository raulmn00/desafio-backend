import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'restaurantes'})
export class Horarios {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'segunda_feira', nullable: false})
    @ApiProperty()
    @IsString()
    segunda_feira: boolean;

    @Column({name: 'terca_feira', nullable: false})
    @ApiProperty()
    @IsString()
    terca_feira: boolean;

    @Column({name: 'quarta_feira', nullable: false})
    @ApiProperty()
    @IsString()
    quarta_feira: boolean;

    @Column({name: 'quinta_feira', nullable: false})
    @ApiProperty()
    @IsString()
    quinta_feira: boolean;

    @Column({name: 'sexta_feira', nullable: false})
    @ApiProperty()
    @IsString()
    sexta_feira: boolean;

    @Column({name: 'sabado', nullable: false})
    @ApiProperty()
    @IsString()
    sabado: boolean;

    @Column({name: 'domingo', nullable: false})
    @ApiProperty()
    @IsString()
    domingo: boolean;
}