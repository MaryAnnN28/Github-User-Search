import React, { useReducer, useRef, createContext } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchUsers, API_LIMIT, PER_PAGE } from '../apis/github'; 
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import UserList from '../components/users/UserList';
import { Segment } from 'semantic-ui-react';
import axios from 'axios';


export const Actions = {
	SetIsLoading: 0,
	SetResults: 1,
	SetPage: 3,
	RateLimitExceeded: 10,
	FailedFetch: 2
}

const reducer = (state, { type, payload }) => {
	switch (type) {
		case Actions.SetIsLoading:
			return { ...Actions, isLoading: payload };
		case Actions.FailedFetch:
			return { ...state, error: true, isLoading: false, failedToLoadMsg: payload };
		case Actions.SetResults:
			return {
				...state,
				isLoading: false,
				users: payload.items,
				total: payload.total_count,
				pageCount: payload.pageCount,
				currentPage: payload.currentPage
			};
		case Actions.RateLimitExceeded:
			return { ...state, RateLimitExceeded: true };
		default:
			return state;
	}
};

export const AppContext = createContext(null); 

const App = () => {

	const [state, dispatch] = useReducer(reducer, {});
	const { users, isLoading, total, currentPage, pageCount, failedToLoadMsg, RateLimitExceeded } = state;
	const searchText = useRef('');
	const exceededUsersLimit = total > API_LIMIT;
	
	const goToPage = async (page) => {
		dispatch({ type: Actions.SetIsLoading, payload: true });
		try {
			let payload = await fetchUsers(searchText.current, page);
			dispatch({ type: Actions.SetResults, payload });
		}
		catch (e) {
			dispatch({ type: Actions.FailedFetch, payload: e });
		}
	};
	
	const onSearch = async (text) => {
		searchText.current = text.repalce(/\s/g, '+');
		goToPage(1);
	};
	
	const getResultsHeader = () => {
		if (total === 1) {
			return 'Found 1 User';
		}

		if (total <= PER_PAGE) {
			return `Found ${total} Users`;
		}
		
		if (currentPage === 1) {
			return `Showing First ${PER_PAGE} of ${exceededUsersLimit ? '1000+' : total} Found Users`;
		}

		if (!exceededUsersLimit && currentPage === pageCount) {
			let startNum = total - users.length + 1;
			return `Showing Users ${startNum} - ${total} of ${total} Found Users`;
		}

		return `Showing Users ${((currentPage - 1) * PER_PAGE) + 1} - ${currentPage * PER_PAGE} of ${exceededUsersLimit ? '1000+' : total} Found Users`;
	};
	
	return (
		<AppContext.Provider value={{ dispatch, RateLimitExceeded }}>
			<div className="App">
				<div className="ui container">
					<SearchBar
						onSearch={onSearch}
						loading={isLoading}
					/>
					{
						total !== undefined &&
						<h3>{total === 0 ? 'No users found' : getResultsHeader()}</h3>
					}
				</div>
				{
					!!total &&
					<UserList
						total={exceededUsersLimit ? API_LIMIT : total}
						exceededUsersLimit={exceededUsersLimit}
						users={users}
						currentPage={currentPage}
						pageCount={pageCount}
						goToPage={goToPage}
					/>
				}
				{
					failedToLoadMsg &&
					<h3 className="error-message">{failedToLoadMsg}</h3>
				}
				{
					RateLimitExceeded &&
					<h3 className="error-message">API Rate limit has been exceeded. Only usernames and avatars will be shown for now</h3>
				}
				{
					total > PER_PAGE &&
					<ReactPaginate
						pageCount={pageCount}
						pageRangeDisplayed={1}
						marginPagesDisplayed={3}
						onPageChange={({ selected }) => goToPage(selected + 1)}
					/>
				}
			</div>
		</AppContext.Provider>
	);
};

export default App; 
	
	//const [users, setUsers] = useState([]);
	//const [query, setQuery] = useState("")
	//const [page, setPage] = useState(1);
	//const [totalCount, setTotalCount] = useState(0);
	//const [totalPages, setTotalPages] = useState(1); 
	//const usersPerPage = 12;
	//const maxResults = 1000; 

	//const userSearch = users => {	
	//	axios
	//		.get(`https://api.github.com/search/users?q=${users}+in:user?&page=${page}&per_page=${usersPerPage}`)
	//		.then(resp => setUsers(resp.data.items))
	//		.catch(error => console.log(error.response));
	//};


//	return (
//		<div>
//			<BrowserRouter>
//				<Navbar />
//				<div className='ui container' style={{ marginBottom: '2em' }}>
					
//					<SearchBar onFormSubmit={userSearch} />

//					<Segment>
//						<Route path="/" render={routerProps => 
//							<UserList users={users} {...routerProps} />
//						} />
						
//					</Segment>
	
//				</div>
//			</BrowserRouter>
//		</div>
//	);
//};

//export default App;
