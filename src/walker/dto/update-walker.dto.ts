import { PartialType } from '@nestjs/mapped-types';
import { CreateWalkerDto } from './create-walker.dto';

export class UpdateWalkerDto extends PartialType(CreateWalkerDto) {}
