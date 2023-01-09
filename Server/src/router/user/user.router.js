import { Router } from 'express';

const UserRouter = Router();

UserRouter.route('/').post((_, res) => res.send('Hello World!'));

export default UserRouter;
