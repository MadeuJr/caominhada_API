import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalkerModule } from './walker/walker.module';
import { TutorModule } from './tutor/tutor.module';
import { DogModule } from './dog/dog.module';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [WalkerModule, TutorModule, DogModule, TripModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
