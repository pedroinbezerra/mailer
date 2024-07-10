import { Body, Controller, Post } from '@nestjs/common';
import { SendMailDto } from './dto/sendMail.dto';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
    constructor(private mailService: MailService) {
    }

    @Post('/send')
    async sendMail(@Body() mailData: SendMailDto) {
        return await this.mailService.sendMail(mailData);
    }
}
