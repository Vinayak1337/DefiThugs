import { Router } from 'express';

const AuthRouter = Router();

AuthRouter.route('/').post((_, res) => res.send('Hello World!'));

export default AuthRouter;
