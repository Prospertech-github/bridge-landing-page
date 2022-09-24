import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './Pages/Home/Home1';
import './index.css';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home1 />} />
					<Route path="*" element={<Home1 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
