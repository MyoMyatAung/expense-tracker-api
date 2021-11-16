import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dtos/create-transaction.dto';

@Injectable()
export class TransactionsService {

     findAll() {
          return 'Find all transactions';
     }

     findOne(id: string) {
          return `Find particular transaction: ${id}`;
     }

     create(transaction: CreateTransactionDto) {
          console.log('> Create Transaction: ', transaction);
          return 'Create transaction';
     }

     update(transaction: CreateTransactionDto, id: string) {
          console.log('> Update Transaction Object: ', transaction);
          console.log('> Update transaction ID: ', id);
          return 'Update transaction';
     }

     remove(id: string) {
          console.log('> Remove transaction ID: ', id);
          return 'Remove transaction';
     }

}
