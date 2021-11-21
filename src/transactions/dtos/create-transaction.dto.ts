import { IsDateString, IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  readonly transaction_type: string;

  @IsDateString()
  readonly date: Date;

  @IsMongoId()
  readonly category: string;

  @IsMongoId()
  readonly user: string;

  @IsNumber()
  readonly amount: number;

  @IsString()
  readonly description: string;
}
