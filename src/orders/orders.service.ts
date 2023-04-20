import {
  Injectable,
  // BadRequestException
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: { orderedProducts: true, user: true },
    });
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: { orderedProducts: true, user: true },
    });
  }

  // public async create(orderData: Omit<Order, 'id'>): Promise<Order> {
  //   const {
  //     userId,
  //     orderedProducts,
  //     ...otherData
  //   } = orderData;
  //   try {
  //     return await this.prismaService.order.create({
  //       data: {
  //         ...otherData,
  //         orderedProducts: {
  //           connect: { id: orderedProducts },
  //         },
  //         user: {
  //           connect: { id: userId },
  //         },
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     if (error.code === 'P2025') {
  //       throw new BadRequestException("Product doesn't exist");
  //     }
  //     throw error;
  //   }
  // }
}
