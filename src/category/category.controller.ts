import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('category')
export class CategoryController {

     constructor(private categoryService: CategoryService) { }

     @Get()
     findAll() {
          return this.categoryService.findAll();
     }

     @Get(':id')
     findOne(
          @Param('id') id: string
     ) {
          return this.categoryService.findOne(id);
     }

     @Post()
     async create(
          @Body() body: CreateCategoryDto
     ) {
          return await this.categoryService.create(body);
     }

     @Put(':id')
     update(
          @Param('id') id: string,
          @Body() body: CreateCategoryDto
     ) {
          return this.categoryService.update(id, body);
     }

     @Delete(':id')
     remove(
          @Param('id') id: string,
     ) {
          return this.categoryService.remove(id);
     }
}
