import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { nodemailer } from 'nodemailer'
import nodeMailgun from 'nodemailer-mailgun-transport'
import { send } from 'process';


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

    // let info = await transporter.sendMail({
    //     // from: `"Seaway 👻" <michaelozor15@gmail.com>`, // sender address
    //     from: `"Peacegroup 👻" <${senderEmail}>`, // sender address
    //     to: `${recipientEmail}`, // list of receivers
    //     subject: `${subject}`, // Subject line
    //     text: "Hello world?", // plain text body
    //     html: `<b>${message}</b>`, // html body
    // });

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
}





/**
 * 
 * @param {String} senderEmail 
 * @param {Array of string}  recipientEmail 
 * @param {String} message 
 */
