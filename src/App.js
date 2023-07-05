import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import AccountMenu from './components/AccountMenu';
import BasicForm from './scenes/BasicForm';
import Home from './scenes/Home';

export default function App() {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate("/todo");
	};
  return (
    <Container maxWidth="sm">
			<AccountMenu onClick={handleOnClick} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/todo" element={<BasicForm />} />
			</Routes>
    </Container>
  );
}
