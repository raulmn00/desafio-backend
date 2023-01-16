import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantesModule } from './restaurantes/restaurantes.module';

@Module({
  imports: [RestaurantesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
