import { Injectable } from '@nestjs/common';
import { CreateWalkerDto } from './dto/create-walker.dto';
import { UpdateWalkerDto } from './dto/update-walker.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WalkerService {
  constructor(private prisma: PrismaService) {}

  async create(createWalkerDto: CreateWalkerDto) {
    return this.prisma.walker.create({
      data: createWalkerDto,
    });
  }

  async findAll() {
    return this.prisma.walker.findMany();
  }

  async findOne(id: number) {
    return this.prisma.walker.findUnique({
      where: { id },
    });
  }

 async  update(id: number, updateWalkerDto: UpdateWalkerDto) {
    return this.prisma.walker.update({
      where: { id },
      data: updateWalkerDto,
    });
  }

  async remove(id: number) {
    return this.prisma.walker.delete({
      where: { id },
    });
  }
}
