import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private OrdersRepository: Repository<Order>,
      ) {}
    
      async getAll(): Promise<Order[]> {
        return await this.OrdersRepository.find({ relations: ["orderDetails","address","user"] });
      }
    
      findOne(id: number): Promise<Order> {
        return this.OrdersRepository.findOne(id, { relations: ["orderDetails","address","user"] });
      }

      async create(Order: Order) {
        return this.OrdersRepository.save(Order);
      }
    
      async remove(id: string): Promise<void> {
        await this.OrdersRepository.delete(id);
      }
    
      async edit(id: number, Order: Order): Promise<Order> {
        const editedOrder = await this.OrdersRepository.findOne(id);
        if (!editedOrder) {
          throw new NotFoundException('Order is not found');
        }
        editedOrder.status = Order.status;
        editedOrder.orderType = Order.orderType;
        editedOrder.orderAmount = Order.orderAmount;
        editedOrder.orderDetails = Order.orderDetails;
        editedOrder.address = Order.address;
        editedOrder.user = Order.user;
        await editedOrder.save();
        return editedOrder;
      }
}
