import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { OrderDetailsModule } from 'src/order-details/order-details.module';
import { OrderController } from './order.controller';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), AuthModule, OrderDetailsModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
