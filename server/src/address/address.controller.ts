import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Address } from './address.entity';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.addressService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.addressService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post() 
    async create(@Body() address: Address) {
        let resp = await this.addressService.create(address);
        return resp;
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async editcontact(@Body() Address: Address, @Param('id') id: number): Promise<Address> {
        const contactEdited = await this.addressService.edit(id, Address);
        return contactEdited;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
        this.addressService.remove(id);
    }
}
