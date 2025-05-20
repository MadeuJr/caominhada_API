import { Module } from '@nestjs/common';
import { WalkerService } from './walker.service';
import { WalkerController } from './walker.controller';

@Module({
  controllers: [WalkerController],
  providers: [WalkerService],
})
export class WalkerModule {}
