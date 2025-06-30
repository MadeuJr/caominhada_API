import { IsEnum, IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateWalkerDto {
  @IsNumber()
  readonly userId: number;

}
