import { Module } from '@nestjs/common';
import { RestaurantesService } from './restaurantes.service';
import { RestaurantesController } from './restaurantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurante } from './entities/restaurante.entity';
import { RestaurantesRepository } from './repository/restaurantes.repository';
import { Repository } from 'typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurante])],
    controllers: [RestaurantesController],
    providers: [
        RestaurantesService,
        Restaurante,
        RestaurantesRepository,
        Repository,
    ],
    exports: [RestaurantesService],
})
export class RestaurantesModule {}
