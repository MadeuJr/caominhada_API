import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TutorModule } from './tutor/tutor.module';
import { WalkerModule } from './walker/walker.module';
import { DogModule } from './dog/dog.module';
import { TripModule } from './trip/trip.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, TutorModule, WalkerModule, DogModule, TripModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
1