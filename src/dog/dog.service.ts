import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DogService {
  constructor(private prismaService: PrismaService){}
  async create(createDogDto: CreateDogDto) {
    return await this.prismaService.dog.create({
      data: createDogDto
    })
  }

  async findAll() {
    return await this.prismaService.dog.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.dog.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateDogDto: UpdateDogDto) {
    return await this.prismaService.dog.update({
      where: { id },
      data: updateDogDto
    })
  }

  async remove(id: number) {
    return await this.prismaService.dog.delete({
      where: { id }
    })
  }
}
