import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContactModule } from './contact/contact.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot(), ContactModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
