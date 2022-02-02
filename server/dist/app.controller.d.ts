import { AuthService } from './auth/auth.service';
import { User } from './users/users.entity';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    register(user: User): Promise<void>;
    getProfile(req: any): any;
}
