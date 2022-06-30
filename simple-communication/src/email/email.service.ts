import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { nodemailer } from 'nodemailer'
import nodeMailgun from 'nodemailer-mailgun-transport'


@Injectable()
export class EmailService {

  constructor(private mailer: MailerService){}

  sendmail(): object {
    const auth = {
      api_key : process.env.API_KEY,
      domain : process.env.DOMAIN,
    };
    let transporter = nodemailer.createTransport(nodeMailgun(auth));

    let mailOptions ={
      from : "Kirin Library <kirin@samples.mailgun.com",
      to : "charlesmir04@gmail.com",
      subject : "Registration verification",
      text : " Dear veritas, welcome to kirin library",
    };
    transporter.sendMail(mailOptions,function(err,data){
      if(err){
        console.log("Error",err);
      }
      else{
        console.log('message sent');
      }
    });
    return{}
  };


  async sendMail(senderEmail, recipientEmail, subject, message){
    // generate test account
    // let testAccount = await nodemailer.createTestAccount();

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
