import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    findAll() {
        return this.productService.getAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.productService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post() create(@Body() product: Product) {
        return this.productService.create(product);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async editcontact(@Body() product: Product, @Param('id') id: number): Promise<Product> {
        const contactEdited = await this.productService.edit(id, product);
        return contactEdited;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
        this.productService.remove(id);
    }
}
