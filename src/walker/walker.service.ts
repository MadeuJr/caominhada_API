import { Injectable } from '@nestjs/common';
import { CreateWalkerDto } from './dto/create-walker.dto';
import { UpdateWalkerDto } from './dto/update-walker.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WalkerService {
  constructor(private prisma: PrismaService) {}

  async create(createWalkerDto: CreateWalkerDto) {
    return await this.prisma.walker.create({
      data: createWalkerDto,
    });
  }

  async findAll() {
    return await this.prisma.walker.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.walker.findUnique({
      where: { userId: id },
    });
  }

 async update(id: number, updateWalkerDto: UpdateWalkerDto) {
    return this.prisma.walker.update({
      where: { id },
      data: updateWalkerDto,
    });
  }

  async getTutorsbyWalkerId(id: number) {
    return await this.prisma.tutor.findMany({
      where: { walkerId: id },
      include: {
        user: {
          select: { name: true }
        }
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.walker.delete({
      where: { id },
    });
  }
}
