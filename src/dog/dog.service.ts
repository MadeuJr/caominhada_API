import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DogService {
  constructor(private prismaService: PrismaService){}
  create(createDogDto: CreateDogDto) {
    return this.prismaService.dog.create({
      data: createDogDto
    })
  }

  findAll() {
    return this.prismaService.dog.findMany();
  }

  findOne(id: number) {
    return this.prismaService.dog.findUnique({
      where: { id }
    });
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return this.prismaService.dog.update({
      where: { id },
      data: updateDogDto
    })
  }

  remove(id: number) {
    return this.prismaService.dog.delete({
      where: { id }
    })
  }
}
