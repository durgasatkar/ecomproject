import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNumber, isNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @IsString()
  name: String;

  @Column()
  @MinLength(1)
  @IsEmail()
  email: String;

  @Column()
  @MinLength(1)
  @IsString()
  contactNo: string;

  @Column()
  @MinLength(1)
  @IsString()
  query: String;
}