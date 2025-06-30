import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TutorService {
  constructor(private prisma: PrismaService) {}

  async create(createTutorDto: CreateTutorDto) {
    return this.prisma.tutor.create({
      data: createTutorDto,
    });
  }

  async findAll() {
    return await this.prisma.tutor.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.tutor.findUnique({
      where: { userId: id },
    });
  }

  async getWalkerByTutorID(id: number) {
    const tutor = await this.prisma.tutor.findUnique({
      where: { userId: id },
      select: { walkerId: true },
    });

    if (!tutor || !tutor.walkerId) {
      throw new NotFoundException('Walker not found for this tutor');
    }

    return this.prisma.walker.findUnique({
      where: { id: tutor.walkerId },
    });
  }

  async getDogsbyTutorId(id: number) {
    return await this.prisma.dog.findMany({
      where: { ownerId: id}
    })
  }

  update(id: number, updateTutorDto: UpdateTutorDto) {
    return this.prisma.tutor.update({
      where: { id },
      data: updateTutorDto,
    });
  }

  remove(id: number) {
    return this.prisma.tutor.delete({
      where: { id },
    });
  }
}
