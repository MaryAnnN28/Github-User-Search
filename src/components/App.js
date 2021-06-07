import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Header from './navbar/Navbar';
import Search from '../components/search/Search';
import UserList from '../components/users/UserList';
import Spinner from './Spinner';



const App = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false); 

	const userSearch = (users) => {
		setLoading(true);

		axios
			.get(`https://api.github.com/search/users?q=${users}+in:user`)
			.then((res) => {
				setUsers(res.data.items);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};


	const userContent = () => {
		if (loading) {
			return (
				<div>
					<Spinner />
				</div>
			)
		} else {
			return <UserList users={users} />
		}
	}

	return (
		<div>
			<BrowserRouter>
				<Header />
				<div className='ui container'>
					<Search onFormSubmit={userSearch} />
					{userContent()}
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
