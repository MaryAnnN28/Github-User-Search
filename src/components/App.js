import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import UserList from '../components/users/UserList';
import UserDetails from '../components/users/UserDetails';
import { Segment } from 'semantic-ui-react';



const App = () => {
	const [users, setUsers] = useState([]);
	const [totalResults, setTotalResults] = useState(0)
	const [currentPage, setCurrentPage] = useState(1); 

	const userSearch = users => {	
		axios
			.get(`https://api.github.com/search/users?q=${users}+in:user`)
			.then(resp => setUsers(resp.data.items))
			.catch(error => console.log(error.response));
		
	};

	const nextPage = pageNum => {
		axios
			.get(`https://api.github.com/search/users?q=${users}+in:user?&page=${pageNum}&per_page=24`)
			.then(resp => setUsers(resp.data.items, currentPage={pageNum}))
			.catch(error => console.log(error.response));
	}
	

	return (

	
		<div>
			<BrowserRouter>
				<Navbar />
				<div className='ui container' style={{ marginBottom: '2em' }}>
					
					<SearchBar onFormSubmit={userSearch} />

					<Segment>
						<Route path="/" render={routerProps => 
							<UserList users={users} {...routerProps} />
						} />
						
						<Route path="/users" render={routerProps => 
							<UserDetails {...routerProps} />
						}/>
					</Segment>
	
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
