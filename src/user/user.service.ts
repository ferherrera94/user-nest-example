import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { PostgresErrorCode } from '../constants/postgres-error-codes.enum';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }


    async createUser(name: string, email: string): Promise<UserEntity> {
        try {
            const newUser = this.userRepository.create({ name, email });
            return await this.userRepository.save(newUser);
        } catch (error) {
            if (error.code === PostgresErrorCode.UNIQUE_VIOLATION) {
                throw new ConflictException('User with this email already exists');
            }
            throw error;
        }
    }
}
