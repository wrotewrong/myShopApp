/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  // @IsNotEmpty()
  // @IsUUID()
  // @IsString()
  // productId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  userId: string;

  orderedProducts: string;
}
