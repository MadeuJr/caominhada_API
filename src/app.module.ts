import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TutorModule } from './tutor/tutor.module';
import { WalkerModule } from './walker/walker.module';
import { DogModule } from './dog/dog.module';
import { TripModule } from './trip/trip.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtAuthGuard } from './auth/guard/jwt.guard.auth';
import { AuthModule } from './auth/auth.module';
import { LocationGateway } from './location/location.gateway';

@Module({
  imports: [
    UserModule,
    TutorModule,
    WalkerModule,
    DogModule,
    TripModule,
    PrismaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    LocationGateway,
  ],
})
export class AppModule {}
