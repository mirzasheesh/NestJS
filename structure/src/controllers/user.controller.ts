import { Controller, Get } from '@nestjs/common';

/* defined */
import { User, UserService } from '../services/user.service';

@Controller('user')
export class UserController {

  @Get()
  findAll(): {} {

    const users: User = UserService.findAll();

    return {
      users: users
    }
  } 
}