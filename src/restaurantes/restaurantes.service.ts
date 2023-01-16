import { Injectable } from '@nestjs/common';
import { ExceptionClass } from 'src/exceptions/Exception';
import { Exceptions } from 'src/exceptions/exceptionsHelper';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { Restaurante } from './entities/restaurante.entity';
import { RestaurantesRepository } from './repository/restaurantes.repository';

@Injectable()
export class RestaurantesService {
    constructor(
        private readonly restaurantesRepository: RestaurantesRepository,
    ) {}
    async createRestauranteService(
        createRestauranteDto: CreateRestauranteDto,
    ): Promise<Restaurante> {
        try {
            const restauranteEntityCreated =
                await this.restaurantesRepository.createRestaurante(
                    createRestauranteDto,
                );
            return restauranteEntityCreated;
        } catch (err) {
            throw new ExceptionClass(
                Exceptions.InvalidData,
                'Error creating user. Please verify the data sent.',
            );
        }
    }

    async findAllRestauranteService(): Promise<Restaurante[]> {
        const allRestaurantes =
            await this.restaurantesRepository.getAllRestaurantes();
        return allRestaurantes;
    }

    async findOneRestauranteService(id: string): Promise<Restaurante> {
        const restauranteFound =
            await this.restaurantesRepository.getRestauranteById(id);
        return restauranteFound;
    }

    async updateRestauranteService(
        id: string,
        updateRestauranteDto: UpdateRestauranteDto,
    ): Promise<Restaurante> {
        const restauranteToUpdate =
            await this.restaurantesRepository.updateRestaurante(
                updateRestauranteDto,
                id,
            );
        return restauranteToUpdate;
    }

    async removeRestauranteService(id: string): Promise<Restaurante> {
        const restauranteToDelete =
            await this.restaurantesRepository.deleteRestaurante(id);
        return restauranteToDelete;
    }
}
