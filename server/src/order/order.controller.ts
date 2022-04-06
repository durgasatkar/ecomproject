import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.orderService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.orderService.findOne(id);
    }

    @Get('/user/:id')
    findOneuser(@Param('id', ParseIntPipe) id) {
        return this.orderService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post() 
    async create(@Body() order: Order) {
        let resp = await this.orderService.create(order);
        return resp;
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async editcontact(@Body() order: Order, @Param('id') id: number): Promise<Order> {
        const contactEdited = await this.orderService.edit(id, order);
        return contactEdited;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
        this.orderService.remove(id);
    }
}
