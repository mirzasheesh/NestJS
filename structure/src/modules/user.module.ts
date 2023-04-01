import { Module } from '@nestjs/common';

/* defined contorller */
import { UserController } from '../controllers/user.controller';

@Module({
  controllers: [UserController],
})

export class UserModule {}