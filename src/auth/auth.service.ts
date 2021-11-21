import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      email: user.email,
      sub: user._id,
    };
    return {
      user: user._doc,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: CreateUserDto) {
    const { username, email, password } = userDto;
    const existedUser = await this.usersService.findOne(email);
    console.log('> EXISTED-USER: ', existedUser);
    if (existedUser) {
      throw new BadRequestException('User already exist!');
    }
    const createdUser = await this.usersService.create(userDto);
    const payload = {
      username: createdUser.username,
      email: createdUser.email,
    };
    return {
      user: createdUser,
      access_token: this.jwtService.sign(payload),
    };
  }
}
