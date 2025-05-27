import {  IsEnum, IsString, IsNumber, IsNotEmpty } from 'class-validator';

enum Availability {
    AVAILABLE = 'AVAILABLE',
    UNAVAILABLE = 'UNAVAILABLE'
}

export class CreateWalkerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

    @IsNumber()    
    readonly userId: number;
    
    @IsEnum(Availability)
    readonly availability: Availability;;
}
