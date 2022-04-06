import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrderDetails } from './order-details.entity';
import { OrderDetailsService } from './order-details.service';

@Controller('order-details')
export class OrderDetailsController {
    constructor(private orderDetailsService: OrderDetailsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.orderDetailsService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.orderDetailsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post() 
    async create(@Body() order: OrderDetails) {
        let resp = await this.orderDetailsService.create(order);
        return resp;
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async editcontact(@Body() order: OrderDetails, @Param('id') id: number): Promise<OrderDetails> {
        const contactEdited = await this.orderDetailsService.edit(id, order);
        return contactEdited;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
        this.orderDetailsService.remove(id);
    }
}
