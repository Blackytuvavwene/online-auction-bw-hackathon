import { TestAccount, Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPConnection from 'nodemailer/lib/smtp-connection';
export declare type Message = {
    from: string;
    to: string;
    subject: string;
    html: string;
};
export declare type MockEmailHandler = {
    account: TestAccount;
    transport: Transporter;
};
export declare type BuildEmailResult = Promise<{
    transport: Mail;
    transportOptions?: SMTPConnection.Options;
    fromName: string;
    fromAddress: string;
} | MockEmailHandler>;
