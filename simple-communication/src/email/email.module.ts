import { Module } from '@nestjs/common';
import { MailerModule } from "@nestjs-modules/mailer";
import { EmailController } from './email.controller';
import { EmailService} from './email.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'michaelozor15@gmail.com',
            pass: 'gtmbzjlnsvxgngij'
        }
      }
  })
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}