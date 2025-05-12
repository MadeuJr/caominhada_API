import { Module } from '@nestjs/common';
import { WalkerController } from './walker.controller';
import { WalkerService } from './walker.service';

@Module({
  imports: [],
  controllers: [WalkerController],
  providers: [WalkerService],
})
export class WalkerModule {}
