import { Injectable } from '@nestjs/common';
import { CreateWalkerDto } from './dto/create-walker.dto';
import { UpdateWalkerDto } from './dto/update-walker.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WalkerService {
  constructor(private prisma: PrismaService) {}

  create(createWalkerDto: CreateWalkerDto) {
    return this.prisma.walker.create({
      data: createWalkerDto,
    });
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
