import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/status')
  getStatus(): any {
    return { status: 200, message: 'API UP' };
  }
}
