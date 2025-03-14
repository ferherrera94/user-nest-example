import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;

  const mockUserService = {
    findAll: jest.fn().mockResolvedValue([]),
    createUser: jest.fn().mockImplementation((name: string, email: string) =>
      Promise.resolve({ id: 1, name, email })
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an empty array of users', async () => {
      const result = await userController.findAll();
      expect(result).toEqual([]);
      expect(mockUserService.findAll).toHaveBeenCalled();
    });
  });

  describe('createUser', () => {
    it('should create and return a user', async () => {
      const userDto = { name: 'John Doe', email: 'john@example.com' };
      const result = await userController.createUser(userDto);
      expect(result).toEqual({ id: 1, ...userDto });
      expect(mockUserService.createUser).toHaveBeenCalledWith(
        userDto.name,
        userDto.email,
      );
    });
  });
});
