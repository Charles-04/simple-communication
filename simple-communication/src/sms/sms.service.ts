import { Injectable } from '@nestjs/common';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
import { config } from 'dotenv';
config()

@Injectable()
export class SmsService {
  public constructor(@InjectTwilio() private readonly client: TwilioClient) {}

  async sendSMS(body,to) {
    try {
      return await this.client.messages.create({
        body,
        from: process.env.TWILIO_PHONE_NUMBER,
        to,
      });
    } catch (e) {
      return e;
    }
  }
  findAll(){
    return "all sms"
  }
}