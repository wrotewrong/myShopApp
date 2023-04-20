import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  // Put,
  // Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const book = await this.productsService.getById(id);
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  // @Put('/:id')
  // async update(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  //   @Body('orderedAmount') orderedAmount: number,
  // ) {
  //   if (!(await this.productsService.getById(id)))
  //     throw new NotFoundException('Product not found');

  //   await this.productsService.updateAmountById(id, orderedAmount);
  //   return { success: true };
  // }

  // @Put('/:id')
  // async update(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  //   @Body('amount') amount: number,
  // ) {
  //   if (!(await this.productsService.getById(id)))
  //     throw new NotFoundException('Product not found');

  //   await this.productsService.updateAmountById(id, amount);
  //   return { success: true };
  // }
}
