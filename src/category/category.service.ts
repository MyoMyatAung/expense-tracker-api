import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoryService {

     findAll() {
          return 'Find all category'
     }

     findOne(id: string) {
          return `Find particular category: ${id}`;
     }

     create(category: CreateCategoryDto) {
          return 'Create Category';
     }

     update(id: string, category: CreateCategoryDto) {
          return 'Update Category';
     }

     remove(id: string) {
          return `Remove Category: ${id}`;
     }

}
