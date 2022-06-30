import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendSmsDto } from './dto/create-sms.dto';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController  {
  constructor(private readonly smsService: SmsService) {}
  @Get()
findAll(): string {
 return this.smsService.findAll()
}
@Post()
create(@Body() data: SendSmsDto) {
  const { body,to} = data;
  return this.smsService.sendSMS(
   body,
   to,
  );
}

}
