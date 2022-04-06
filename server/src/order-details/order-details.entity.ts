import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Order } from 'src/order/order.entity';

@Entity()
export class OrderDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @IsString()
  name: string;
  
  @Column()
  @IsNumber()
  price: number;

  @Column()
  @IsNumber()
  discount: number;

  
  @Column()
  @IsNumber()
  quantity: number;

  @CreateDateColumn()
  created_at: Date;
      
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Order, (o) => o.orderDetails)
  public order: Order;

}