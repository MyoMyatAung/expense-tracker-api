import { Body, Controller, Delete, Get, Header, Headers, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
// @UseGuards(JwtAuthGuard)
export class TransactionsController {
     constructor(private transactionsService: TransactionsService) { }

     @Get()
     getAll(
          @Headers('user') user: string
     ) {
          console.log('> REQUESTED USER ID: ', user);
          return this.transactionsService.findAll(user);
     }

     @Get(':id')
     getOne(
          @Param('id') id: string,
          @Headers('user') user: string
     ) {
          return this.transactionsService.findOne(id, user);
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
