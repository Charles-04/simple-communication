import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';



@Injectable()
export class EmailService {

  constructor(private mailer: MailerService){}

  async sendMail(senderEmail, recipientEmail, subject, message){

    try {
      await this.mailer.sendMail({
        to: recipientEmail,
        from: senderEmail,
        subject,
        text: message
      })
    } catch ( e ) {
      console.log(e);
    }

}
}





/**
 * 
 * @param {String} senderEmail 
 * @param {Array of string}  recipientEmail 
 * @param {String} message 
 */
