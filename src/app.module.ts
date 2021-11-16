import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TransactionsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, CategoryService],
})
export class AppModule {}
