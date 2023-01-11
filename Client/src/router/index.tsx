import Auth from 'pages/auth';
import Home from 'pages/home';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

const Router = () => {
	const isLoggedIn = useSelector((state: State) => !!state.authReducer.token);

	return (
		<Routes>
			<Route
				path='/'
				element={!isLoggedIn ? <Auth /> : <Navigate to='/home' />}
			/>
			<Route
				path='/home'
				element={isLoggedIn ? <Home /> : <Navigate to='/' />}
			/>
			<Route path='*' element={<h1>404</h1>} />
		</Routes>
	);
};

export default Router;
