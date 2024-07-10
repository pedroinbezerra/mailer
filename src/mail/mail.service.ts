import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dto/sendMail.dto';
import { ConfigService } from '@nestjs/config';
const nodemailer = require("nodemailer");

@Injectable()
export class MailService {
    constructor(private configService: ConfigService) { }

    private env(envVar: string) {
        return this.configService.get<string>(envVar);
    }

    private transporter() {
        return nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                // TODO: Corrigir problema ao usar .env com Docker no servidor
                user: 'YOUR_EMAIL_HERE', //this.env('MAIL'), // generated ethereal user
                pass: 'YOUR_PASSWORD_HERE' //this.env('PASS'), // generated ethereal password
            }
        })
    }

    async sendMail(mailData: SendMailDto) {
        const { from, to, subject, html, system = 'F2S' } = mailData;

        console.log(`[sendMail] - Sending mail from: ${from || system} to ${to} ✉️`);

        const transporter = this.transporter()

        let info = await transporter.sendMail({
             // TODO: Corrigir problema ao usar .env com Docker no servidor
            from: from ? `${system} - ${from} <YOUR_EMAIL_HERE` : `${system} <YOUR_EMAIL_HERE>`, // sender
            // from: from ? `${system} - ${from} <${this.env('MAIL')}>` : `${system} <${this.env('MAIL')}>`, // sender
            to: to, // list of receivers
            subject: `${system} - ${subject}`, // Subject line
            // text: "Serviço de envio de e-mail criado com sucesso.", // plain text body
            html: html// html body
        });

        return info.messageId;
    }
}
