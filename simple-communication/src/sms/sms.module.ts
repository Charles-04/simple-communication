import { Module } from '@nestjs/common';
import { TwilioModule } from 'nestjs-twilio';
import { SmsController } from './sms.controller';
import {SmsService} from './sms.service';


@Module({
  imports: [
    TwilioModule.forRoot({
      accountSid: 'ACaba846d03bfbc92c73a3dd367c7d4356',
      authToken: 'b793a4bc96004a93655f920d1e694073',
})],
  controllers: [SmsController],
  providers: [SmsService],
})
export class SmsModule {}

