import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Address } from 'src/address/address.entity';
import { Order } from 'src/order/order.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @IsString()
  name: string;

  @Column()
  @MinLength(1)
  @IsString()
  mobile: string;

  @Column()
  @IsNumber()
  role: number;

  @Column()
  @MinLength(3)
  @IsString()
  password: string;

  @OneToMany(() => Address, (addr) => addr.user)
  public addresses: Address[];

  @OneToMany(() => Order, (o) => o.user)
  public orders: Order[];
}