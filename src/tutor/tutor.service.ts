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

  findAll() {
    return this.prisma.tutor.findMany();
  }

  findOne(id: number) {
    return this.prisma.tutor.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTutorDto: UpdateTutorDto) {
    return this.prisma.tutor.update({
      where: { id },
      data: updateTutorDto
    });
  }

  remove(id: number) {
    return this.prisma.tutor.delete({
      where: {id}
    })
  }
}
