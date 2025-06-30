import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTutorDto {
  @IsString()
  @IsNotEmpty()
  readonly address;

  @IsNumber()
  @IsNotEmpty()
  readonly userId;
}
