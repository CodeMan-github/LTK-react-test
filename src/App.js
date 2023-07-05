import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'

export default function App() {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate("/todo");
	};
  return (
    <Container maxWidth="sm">
			<AccountMenu onClick={handleOnClick} />
			<Routes>
				<Route path="/todo" element={<BasicForm />} />
			</Routes>
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					React Skills test
				</Typography>
			</Box>
    </Container>
  );
}
