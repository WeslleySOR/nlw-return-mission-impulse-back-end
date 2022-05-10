import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "6a56a70de4a98e",
		pass: "96e0639d507e31",
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: "Equipe Feedget <oi@feedget.com>",
			to: "Weslley <weslleyxruas@gmail.com>",
			subject,
			html: body,
		});
	}
}
