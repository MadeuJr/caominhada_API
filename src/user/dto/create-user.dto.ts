import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

enum Role {
  TUTOR = 'TUTOR',
  WALKER = 'WALKER',
}

enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly telephone: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  readonly role: Role;

  @IsNotEmpty()
  @IsEnum(UserStatus)
  readonly status: UserStatus;
}
