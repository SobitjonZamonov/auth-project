import { Injectable, UnauthorizedException } from '@nestjs/common';
import { throws } from 'assert';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor (private readonly userService: UserService){}



    register(username: string, password: string){
        const existingUser = this.userService.findByUsername(username)

        if (existingUser) {
            throw new Error ('User user aleready exists')
        }

        return this.userService.create(username, password)
    }

    login(username: string, password: string){
        const user = this.userService.findByUsername(username)

        if (!user || user.password !== password){
            throw new UnauthorizedException('Invalid credentials')
        }
        return {message: 'Login succesfully', userId: user.id}
    }
}
