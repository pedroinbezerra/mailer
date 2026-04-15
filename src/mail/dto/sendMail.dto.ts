import { IsNotEmpty, IsString } from "class-validator";

export class SendMailDto {
    @IsString()
    @IsNotEmpty()
    from: string;

    @IsString()
    @IsNotEmpty()
    to: string;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    html: string;

    @IsString()
    @IsNotEmpty()
    system: string;
}