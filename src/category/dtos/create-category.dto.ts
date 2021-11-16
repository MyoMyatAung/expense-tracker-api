import { IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {

     @IsString()
     @IsOptional()
     _id: string;

     @IsString()
     category_name: string;

     @IsString()
     category_description: string;

}