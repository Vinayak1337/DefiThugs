import AuthRouter from './auth/auth.router';
import TransactionRouter from './transaction/transaction.router';
import UserRouter from './user/user.router';

const routesMap = {
	user: UserRouter,
	transaction: TransactionRouter
};

export { AuthRouter };

export default routesMap;
