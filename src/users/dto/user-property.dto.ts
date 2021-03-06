import { IsNotEmpty } from 'class-validator';

export class UserPropertyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  desc: string;
}
