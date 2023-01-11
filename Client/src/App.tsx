import axios from 'axios';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Router from 'router';

function App() {
	useEffect(() => {
		globalThis.toast = toast;
		globalThis.API = axios.create({
			baseURL: 'http://localhost:8080',
			headers: {
				'Content-Type': 'application/json'
			}
		}) as AxiosInstance;
	}, []);

	return (
		<>
			<ToastContainer position={toast.POSITION.TOP_CENTER} />
			<Router />
		</>
	);
}

export default App;
