import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDetails } from './order-details.entity';

@Injectable()
export class OrderDetailsService {
    constructor(
        @InjectRepository(OrderDetails) private OrdersRepository: Repository<OrderDetails>,
      ) {}
    
      async getAll(): Promise<OrderDetails[]> {
        return await this.OrdersRepository.find();
      }
    
      findOne(id: number): Promise<OrderDetails> {
        return this.OrdersRepository.findOne(id);
      }
    
      async create(OrderDetails: OrderDetails) {
        return this.OrdersRepository.save(OrderDetails);
      }
    
      async remove(id: string): Promise<void> {
        await this.OrdersRepository.delete(id);
      }
    
      async edit(id: number, OrderDetails: OrderDetails): Promise<OrderDetails> {
        const editedOrder = await this.OrdersRepository.findOne(id);
        if (!editedOrder) {
          throw new NotFoundException('OrderDetails is not found');
        }
        editedOrder.name = OrderDetails.name;
        editedOrder.price = OrderDetails.price;
        editedOrder.discount = OrderDetails.discount;
        editedOrder.order = OrderDetails.order;
        await editedOrder.save();
        return editedOrder;
      }
}
