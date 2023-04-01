import { NestFactory } from '@nestjs/core';

/* defined module */
import { UserModule } from './modules/user.module';

async function server() {

  const app = await NestFactory.create(UserModule);
  
  await app.listen(3000);
}

server();