import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './navbar/Navbar';
import Search from '../components/search/Search';
import UserList from '../components/users/UserList';
import UserDetails from '../components/users/UserDetails';
import { Segment } from 'semantic-ui-react';
import Pagination from './Pagination'; 



const App = () => {
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1); 

	const userSearch = users => {	
		axios
			//.get(`https://api.github.com/search/users?q=${users}+in:user?&page=${page}&per_page=24`)
			.get(`https://api.github.com/search/users?q=${users}+in:user`)
			.then(resp => console.log(resp.data.items))
			.catch(error => console.log(error.response));
	};


	return (

	
		<div>
			<BrowserRouter>
				<Header />
				<div className='ui container' style={{ marginBottom: '2em' }}>
					
					<Search onFormSubmit={userSearch} />

					<Segment>
						<Route path="/" render={routerProps => 
							<UserList users={users} {...routerProps} />
						} />
						
						<Route exact path="/userpage" render={routerProps => 
							<UserDetails {...routerProps} />
						}/>
					</Segment>
	
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
