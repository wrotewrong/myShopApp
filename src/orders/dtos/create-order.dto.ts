/* eslint-disable prettier/prettier */
import { Type, Exclude } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  Max,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  userId: string;

  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductOrdersDTO)
  products: ProductOrdersDTO[];
}

export class ProductOrdersDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  @Max(10)
  @Min(1)
  @IsInt()
  orderedAmount: number;

  @IsOptional()
  @IsString()
  details: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @Exclude()
  orderId: string;
}
