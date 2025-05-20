import { Injectable } from '@nestjs/common';
import { CreateWalkerDto } from './dto/create-walker.dto';
import { UpdateWalkerDto } from './dto/update-walker.dto';

@Injectable()
export class WalkerService {
  create(createWalkerDto: CreateWalkerDto) {
    return 'This action adds a new walker';
  }

  findAll() {
    return `This action returns all walker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} walker`;
  }

  update(id: number, updateWalkerDto: UpdateWalkerDto) {
    return `This action updates a #${id} walker`;
  }

  remove(id: number) {
    return `This action removes a #${id} walker`;
  }
}
