import { Module } from '@nestjs/common';
import { WalkerService } from './walker.service';
import { WalkerController } from './walker.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WalkerController],
  providers: [WalkerService],
})
export class WalkerModule {}
