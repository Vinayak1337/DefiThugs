import Auth from 'pages/auth';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Auth />} />
		</Routes>
	);
};

export default Router;
