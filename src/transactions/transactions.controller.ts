import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
     constructor(private transactionsService: TransactionsService) { }

     @Get()
     getAll() {
          return this.transactionsService.findAll();
     }

     @Get(':id')
     getOne(
          @Param('id') id: string
     ) {
          return this.transactionsService.findOne(id);
     }

     @Post()
     create(
          @Body() createTransactionDto: CreateTransactionDto
     ) {
          return this.transactionsService.create(createTransactionDto);
     }

     @Put(':id')
     update(
          @Body() body: any,
          @Param('id') id: string
     ) {
          return this.transactionsService.update(body, id);
     }

     @Delete(':id')
     remove(
          @Param('id') id: string
     ) {
          return this.transactionsService.remove(id);
     }
}
