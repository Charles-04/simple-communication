import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { TwilioModule } from 'nestjs-twilio';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email/email.controller';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { SmsController } from './sms/sms.controller';
import { SmsService } from './sms/sms.service';
import { SmsModule } from './sms/sms.module';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    EmailModule,
    MailerModule.forRoot({
      transport: {
        host: 'stmp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    }),
    SmsModule,
    TwilioModule.forRoot({
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
    }),
  ],

  controllers: [AppController, EmailController, SmsController],
  providers: [AppService, EmailService, SmsService],
})
export class AppModule {}
