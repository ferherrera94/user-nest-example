import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    createUser(name: string, email: string): Promise<UserEntity>;
}
