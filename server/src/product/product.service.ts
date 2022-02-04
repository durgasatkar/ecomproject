import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private ProductsRepository: Repository<Product>,
      ) {}
    
      async getAll(): Promise<Product[]> {
        return await this.ProductsRepository.find();
      }
    
      findOne(mobile: string): Promise<Product> {
        return this.ProductsRepository.findOne({ where:
            { mobile: mobile }
        });
      }
    
      async create(Product: Product) {
        this.ProductsRepository.save(Product);
      }
    
      async remove(id: string): Promise<void> {
        await this.ProductsRepository.delete(id);
      }
    
      async edit(id: number, Product: Product): Promise<Product> {
        const editedProduct = await this.ProductsRepository.findOne(id);
        if (!editedProduct) {
          throw new NotFoundException('Product is not found');
        }
        editedProduct.name = Product.name;
        editedProduct.description = Product.description;
        editedProduct.image = Product.image;
        editedProduct.price = Product.price;
        editedProduct.discount = Product.discount;
        editedProduct.rating = Product.rating;
        editedProduct.quantity = Product.quantity;
        await editedProduct.save();
        return editedProduct;
      }
}
