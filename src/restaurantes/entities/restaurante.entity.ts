import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'restaurantes'})
export class Restaurante {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @CreateDateColumn({ name: 'created_at' })
    @ApiProperty()
    @IsString()
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    @ApiProperty()
    @IsString()
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    @ApiProperty()
    @IsString()
    deletedAt: string;
}
