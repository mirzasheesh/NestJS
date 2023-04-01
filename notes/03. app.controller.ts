// app.controller.ts
// Nest provides decorators for all of the standard HTTP methods:
// @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), and @Head(). In addition, @All()


// Pattern @Controller('cats/*')
// GET /cats

/*
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}

// POST /cats

import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Req() request: Request): string {
    return 'Created cats';
  }
}

// Custom Response Code

@Post()
@HttpCode(201)
create() {
  return 'This action adds a new cat';
}

// Custom Header

@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
*/