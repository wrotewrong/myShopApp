import {
  Injectable,
  // BadRequestException
} from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany({ include: { images: true } });
  }

  public getById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: { images: true },
    });
  }

  // public async updateAmountById(
  //   id: Product['id'],
  //   orderedAmount: Product['amount'],
  // ): Promise<Product> {
  //   try {
  //     const product = await this.prismaService.product.findUnique({
  //       where: { id },
  //     });

  //     const newAmount = product.amount - orderedAmount;

  //     return await this.prismaService.product.update({
  //       where: { id },
  //       data: {
  //         amount: newAmount,
  //       },
  //     });
  //   } catch (error) {
  //     if (error.code === 'P2025') {
  //       throw new BadRequestException("Product doesn't exist");
  //     }
  //     throw error;
  //   }
  // }

  // public async updateAmountById(
  //   id: Product['id'],
  //   amount: Product['amount'],
  // ): Promise<Product> {
  //   try {
  //     return await this.prismaService.product.update({
  //       where: { id },
  //       data: {
  //         amount,
  //       },
  //     });
  //   } catch (error) {
  //     if (error.code === 'P2025') {
  //       throw new BadRequestException("Product doesn't exist");
  //     }
  //     throw error;
  //   }
  // }
}
