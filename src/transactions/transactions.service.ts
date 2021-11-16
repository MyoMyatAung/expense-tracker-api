import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { Transaction, TransactionDocument } from './schemas/transactions.schema';

@Injectable()
export class TransactionsService {

     constructor(
          @InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>
     ) { }

     async findAll(): Promise<Transaction[]> {
          return this.transactionModel
               .find()
               .populate('category', 'name')
               .exec();
     }

     async findOne(id: string): Promise<Transaction> {
          return this.transactionModel.findById(id);
     }

     async create(transaction: CreateTransactionDto): Promise<Transaction> {
          const createdTransaction = new this.transactionModel(transaction);
          return createdTransaction.save();
     }

     async update(transaction: CreateTransactionDto, id: string): Promise<Transaction> {
          return this.transactionModel.findByIdAndUpdate(id, transaction)
     }

     async remove(id: string) {
          return this.transactionModel.deleteOne({ _id: id });
     }

}
