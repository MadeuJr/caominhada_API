import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalkerService } from './walker.service';
import { CreateWalkerDto } from './dto/create-walker.dto';
import { UpdateWalkerDto } from './dto/update-walker.dto';

@Controller('walker')
export class WalkerController {
  constructor(private readonly walkerService: WalkerService) {}

  @Post()
  create(@Body() createWalkerDto: CreateWalkerDto) {
    return this.walkerService.create(createWalkerDto);
  }

  @Get()
  findAll() {
    return this.walkerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walkerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalkerDto: UpdateWalkerDto) {
    return this.walkerService.update(+id, updateWalkerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walkerService.remove(+id);
  }
}
