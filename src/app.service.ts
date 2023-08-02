import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: UserRepository) {}

  getHello(): string {
    return this.userRepository.getUser();
  }
}
