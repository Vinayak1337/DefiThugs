import SgMail from '@sendgrid/mail';
import config from './config';

export const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

SgMail.setApiKey(config.SEND_GRID_SECRET_KEY);

export const sendOtpToEmail = async (email, otp, name) => {
	try {
		const msg = {
			to: email,
			from: config.AWS_SENDER_EMAIL,
			subject: 'Email Confirmation OTP',
			text: `Hi ${name}! Your OTP for email confirmation is: ${otp}`,
			html: `<h3>Hi ${name}!</h3><br/>
			<p>Your OTP for email confirmation is:<em> ${otp}</em>
			</p><br/>
			<p>Regards, Defi-thugs</p>
			`
		};
		await SgMail.send(msg);

		// const params = {
		// 	Destination: {
		// 		ToAddresses: [email]
		// 	},
		// 	Message: {
		// 		Body: {
		// 			Html: {
		// 				Charset: 'UTF-8',
		// 				Data: `<h3>Hi ${name}!</h3><br/>
		//     <p>Your OTP for email confirmation is:<em> ${otp}</em>
		//     </p><br/>
		//     <p>Regards, Defi-thugs</p>
		//     `
		// 			},
		// 			Text: {
		// 				Charset: 'UTF-8',
		// 				Data: `Hi  $\{name\}!Your Login OTP is $\{otp\}`
		// 			}
		// 		},
		// 		Subject: {
		// 			Charset: 'UTF-8',
		// 			Data: `${otp} is the  OTP for email confirmation!`
		// 		}
		// 	},
		// 	Source: config.AWS_SENDER_EMAIL,
		// 	ReplyToAddresses: [email]
		// };

		// await new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
	} catch (error) {
		throw error;
	}
};
