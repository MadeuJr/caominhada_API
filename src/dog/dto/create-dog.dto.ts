import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

enum DogSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export class CreateDogDto {
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
  @IsNotEmpty()
  readonly observation;

  @IsNumber()
  @IsNotEmpty()
  readonly ownerId;
}
