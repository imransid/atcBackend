import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightGateway } from './flight.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FlightGateway],
})
export class AppModule {}
