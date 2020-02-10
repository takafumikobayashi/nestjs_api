import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    var res = 'Hello World'
    return JSON.stringify(res);
  }
}
