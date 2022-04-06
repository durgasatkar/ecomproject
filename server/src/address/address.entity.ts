import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

import { Order } from 'src/order/order.entity';
import { User } from 'src/users/users.entity';

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // userId: number;

  @Column()
  @MinLength(1)
  @IsString()
  name: string;

  @Column()
  @MinLength(1)
  @IsString()
  addressType: string;

  @Column()
  @IsString()
  addrLine1: string;

  @Column()
  @IsString()
  addrLine2: string;

  @Column()
  @IsString()
  area: string;

  @Column()
  @IsString()
  landmark: string;

  @Column()
  @IsString()
  city: string;

  @Column()
  @IsString()
  pin: string;

  @ManyToOne(() => User, (user) => user.addresses)
  public user: User;

  @OneToMany(() => Order, (o) => o.address)
  public orders: Order[];

}