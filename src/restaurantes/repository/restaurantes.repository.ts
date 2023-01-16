import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionClass } from 'src/exceptions/Exception';
import { Exceptions } from 'src/exceptions/exceptionsHelper';
import { Repository } from 'typeorm';
import { CreateRestauranteDto } from '../dto/create-restaurante.dto';
import { UpdateRestauranteDto } from '../dto/update-restaurante.dto';
import { Restaurante } from '../entities/restaurante.entity';

@Injectable()
export class RestaurantesRepository {
    constructor(
        @InjectRepository(Restaurante)
        private readonly restauranteRepository: Repository<Restaurante>,
    ) {}

    async createRestaurante(
        restauranteData: CreateRestauranteDto,
    ): Promise<Restaurante> {
        try {
            const restauranteCreated = await this.restauranteRepository.save(
                restauranteData,
            );
            return restauranteCreated;
        } catch (err) {
            throw new ExceptionClass(
                Exceptions.DatabaseException,
                'Erro ao criar restaurante. Verifique os dados enviados.',
            );
        }
    }

    async updateRestaurante(
        restauranteData: UpdateRestauranteDto,
        id: string,
    ): Promise<Restaurante> {
        try {
            const restauranteToUpdate = await this.getRestauranteById(id);
            this.restauranteRepository.merge(
                restauranteToUpdate,
                restauranteData,
            );
            return await this.restauranteRepository.save(restauranteToUpdate);
        } catch (err) {
            throw new ExceptionClass(
                Exceptions.DatabaseException,
                'Erro ao atualizar o restaurante, por favor verifique os dados enviados.',
            );
        }
    }

    async deleteRestaurante(restauranteId: string): Promise<Restaurante> {
        try {
            const restauranteToDelete = await this.getRestauranteById(
                restauranteId,
            );
            await this.restauranteRepository.softDelete(restauranteId);
            return restauranteToDelete;
        } catch (err) {
            throw new ExceptionClass(
                Exceptions.DatabaseException,
                'Erro ao deletar restaurante, verifique o ID enviado.',
            );
        }
    }

    async getAllRestaurantes(): Promise<Restaurante[]> {
        const allRestaurantes = await this.restauranteRepository.find();
        return allRestaurantes;
    }

    async getRestauranteById(restauranteId: string): Promise<Restaurante> {
        try {
            const restauranteFound = await this.restauranteRepository.findOne({
                where: { id: restauranteId },
            });
            return restauranteFound;
        } catch (err) {
            throw new ExceptionClass(
                Exceptions.DatabaseException,
                'Erro ao encontrar restaurante. Por favor verifique o ID enviado.',
            );
        }
    }
}
