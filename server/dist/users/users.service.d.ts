import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getAll(): Promise<User[]>;
    findOne(mobile: string): Promise<User>;
    create(user: User): Promise<void>;
    remove(id: string): Promise<void>;
    edit(id: number, user: User): Promise<User>;
}
