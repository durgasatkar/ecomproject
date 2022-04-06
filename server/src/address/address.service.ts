import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address) private AddresssRepository: Repository<Address>,
      ) {}
    
      async getAll(): Promise<Address[]> {
        return await this.AddresssRepository.find();
      }
    
      findOne(id: number): Promise<Address> {
        return this.AddresssRepository.findOne(id);
      }
    
      async create(Address: Address) {
        return this.AddresssRepository.save(Address);
      }
    
      async remove(id: string): Promise<void> {
        await this.AddresssRepository.delete(id);
      }
    
      async edit(id: number, Address: Address): Promise<Address> {
        const editedAddress = await this.AddresssRepository.findOne(id);
        if (!editedAddress) {
          throw new NotFoundException('Address is not found');
        }
        editedAddress.name = Address.name;
        editedAddress.addressType = Address.addressType;
        editedAddress.addrLine1 = Address.addrLine1;
        editedAddress.addrLine2 = Address.addrLine2;
        editedAddress.landmark = Address.landmark;
        editedAddress.area = Address.area;
        editedAddress.city = Address.city;
        editedAddress.pin = Address.pin;
        await editedAddress.save();
        return editedAddress;
      }
}
