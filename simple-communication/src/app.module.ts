import { Module } from '@nestjs/common';
import { MailerModule } from "@nestjs-modules/mailer";
import { TwilioModule } from 'nestjs-twilio';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email/email.controller';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { SmsController } from './sms/sms.controller';
import { SmsService } from './sms/sms.service';
import { SmsModule } from './sms/sms.module';

@Module({
  imports: [
    EmailModule,
    MailerModule.forRoot({
      transport: {
        host: 'stmp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'michaelozor15@gmail.com',
            pass: 'gtmbzjlnsvxgngij'
        }
      }
  }),
  SmsModule,
  TwilioModule.forRoot({
    accountSid: 'ACaba846d03bfbc92c73a3dd367c7d4356',
    authToken: 'b793a4bc96004a93655f920d1e694073',
})
],
  
  controllers: [AppController, EmailController, SmsController],
  providers: [AppService,EmailService,SmsService],
})
export class AppModule {}
