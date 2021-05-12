import { UserService } from './user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('shoulde be return Array', () => {
    const result = service.LoadUsers();
    expect(result).toBeInstanceOf(Array);
  });

  describe('CreateUser', () => {
    it('should be return a user', () => {
      service.CreateUser({
        userId: 'testcodehyemin',
        userPw: 'test1234',
        userEmail: 'h@gh',
      });
      const user = service.LoginUser(1);
      expect(user).toBeDefined();
      expect(user.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.LoginUser(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`User with ID 999 not found.`);
      }
    });
  });
});
