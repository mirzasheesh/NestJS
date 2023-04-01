import { Injectable } from '@nestjs/common';

export type User = {
    userID: number
    username: string
}

@Injectable()
export class UserService {

    private users: User[] = [];

    get(userID: number) {

        return this.users[userID + 1];
    }

    create(user: User) {
        
        this.users.push(user);

        return this.users.length;
    }

    findAll(): User[] {

        return this.users;
    }
}