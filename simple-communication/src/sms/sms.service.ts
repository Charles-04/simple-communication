import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
  findAll(): string {
    return 'all Sms!';
  }
}