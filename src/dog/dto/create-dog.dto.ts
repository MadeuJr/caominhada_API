import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

enum DogSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export class CreateDogDto {
  @IsNumber()
  @IsNotEmpty()
  readonly ownerId;

  @IsString()
  @IsNotEmpty()
  readonly name;

  @IsString()
  @IsNotEmpty()
  readonly breed;

  @IsEnum(DogSize)
  @IsNotEmpty()
  readonly weight;

  @IsString()
  @IsOptional()
  readonly observation;
}
