import { User } from './entities/user.entiti';
export declare class UserService {
    private users;
    private idCounter;
    create(username: string, password: string): User;
    findByUsername(username: string): User | undefined;
}
