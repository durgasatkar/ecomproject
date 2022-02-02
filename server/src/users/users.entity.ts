import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

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
  role: string;

  @Column()
  @MinLength(3)
  @IsString()
  password: string;
}