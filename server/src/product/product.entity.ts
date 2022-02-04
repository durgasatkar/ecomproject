import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @IsString()
  name: string;

  @Column()
  @MinLength(1)
  @IsString()
  description: string;

  @Column()
  @IsString()
  image: string;

  @Column()
  @IsNumber()
  price: number;

  @Column()
  @IsNumber()
  discount: number;

  @Column()
  @IsNumber()
  rating: number;

  @Column()
  @IsNumber()
  quantity: number;
}