import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(username: string, password: string): import("../user/entities/user.entiti").User;
    login(username: string, password: string): {
        message: string;
        userId: number;
    };
}
