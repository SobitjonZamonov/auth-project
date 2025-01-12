import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    register(username: string, password: string): import("../user/entities/user.entiti").User;
    login(username: string, password: string): {
        message: string;
        userId: number;
    };
}
