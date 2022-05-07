import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "20635d64d59421",
      pass: "6311df540fd6f0"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget (oi@feedget.com)',
            to: 'Bruno SD <bruno@petgente.com>',
            subject,
            html: body,
        })
    }
}


