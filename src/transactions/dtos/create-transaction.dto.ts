import {
     IsDateString,
     IsNumber,
     IsString
} from "class-validator";

export class CreateTransactionDto {
     @IsString()
     _id: string;

     @IsString()
     transaction_type: string;

     @IsDateString()
     date: string;

     @IsString()
     category: string;

     @IsNumber()
     amount: number;

     @IsString()
     description: string;

}