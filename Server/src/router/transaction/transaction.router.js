import { Router } from 'express';

const TransactionRouter = Router();

TransactionRouter.route('/').post((_, res) => res.send('Hello World!'));

export default TransactionRouter;
