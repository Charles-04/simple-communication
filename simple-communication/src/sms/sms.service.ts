import { Injectable } from '@nestjs/common';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
@Injectable()
export class SmsService {
  public constructor(@InjectTwilio() private readonly client: TwilioClient) {}

  async sendSMS(body,to) {
    try {
      return await this.client.messages.create({
        body,
        from:"+18645315499",
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