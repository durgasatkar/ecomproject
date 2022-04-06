import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

import { Address } from 'src/address/address.entity';
import { OrderDetails } from 'src/order-details/order-details.entity';
import { User } from 'src/users/users.entity';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  status: number;

  @Column()
  @MinLength(1)
  @IsString()
  orderType: string;

  @Column()
  @IsNumber()
  orderAmount: number;

  @CreateDateColumn()
  created_at: Date;
      
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.orders)
  public user: User;

  @ManyToOne(() => Address, (address) => address.orders)
  public address: Address;

  @OneToMany(() => OrderDetails, (od) => od.order, { cascade: ['insert'] })
  public orderDetails: OrderDetails[];

}