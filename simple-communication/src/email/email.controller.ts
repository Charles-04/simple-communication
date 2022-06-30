import { Get,Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendMailDto } from './dto/send-mail.dto';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}
    @Get()
  findAll(): Promise<void> {
   return this.emailService.sendMail(
    'michaelozor15@gmail.com',
    'jamder534@gmail.com',
    'Test mail',
    'Welcome to Peacegroup mailservic'
    )
  }

  @Post()
  create(@Body() data: SendMailDto) {
    const { subject, recipientEmail, message } = data;
    return this.emailService.sendMail(
      'charlesmir04@gmail.com',
      recipientEmail,
      subject,
      message
    );
  }

}
