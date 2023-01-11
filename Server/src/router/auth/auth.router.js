import { Router } from 'express';
import { sendEmailConfirmation } from './auth.controller.js';

const AuthRouter = Router();

AuthRouter.route('/login').post((_, res) => res.send('Hello World!'));
AuthRouter.route('/register').post((_, res) => res.send('Hello World!'));
AuthRouter.route('/refresh-token').post((_, res) => res.send('Hello World!'));
AuthRouter.route('/confirm-email').post((_, res) => res.send('Hello World!'));
AuthRouter.route('/send-email-confirmation').post(sendEmailConfirmation);

export default AuthRouter;
