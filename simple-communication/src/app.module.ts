import { Module } from '@nestjs/common';
import { MailerModule } from "@nestjs-modules/mailer";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email/email.controller';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { SmsController } from './sms/sms.controller';
import { SmsService } from './sms/sms.service';

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
  })
  ],
  controllers: [AppController, EmailController, SmsController],
  providers: [AppService,EmailService,SmsService],
})
export class AppModule {}
