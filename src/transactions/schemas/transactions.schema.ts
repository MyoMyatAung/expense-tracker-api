import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Category } from "src/category/schemas/category.schema";

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
     @Prop({
          type: String,
          required: true
     })
     transaction_type: string;

     @Prop({
          type: Date,
          required: true
     })
     date: Date;

     @Prop({
          type: MongooseSchema.Types.ObjectId,
          ref: 'Category',
          required: true
     })
     category: string;

     @Prop({
          type: MongooseSchema.Types.ObjectId,
          ref: 'User',
          required: true
     })
     user: string;

     @Prop({
          type: Number,
          required: true
     })
     amount: number;

     @Prop({
          type: String,
          required: true
     })
     description: string
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);