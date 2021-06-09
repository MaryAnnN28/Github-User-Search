import React, { useState } from 'react'; 
import UserCard from './UserCard';
import ReactPaginate from 'react-paginate'; 




const UserList = () => {

	const [users, setUsers] = useState([])

	const [pageNumber, setPageNumber] = useState(1);
	const usersPerPage = 12;
	const pagesVisited = pageNumber * usersPerPage;

	const displayUsers = users
		.slice(pagesVisited, pagesVisited + usersPerPage)
		.map(user => {
			return (
				<div
					className='user-card ui card'
					key={user.id}
					user={user}
					style={{margin: '1em'}}
				>
					<div className='image'>
						<img src={user.avatar_url} alt={user.login} />
					</div>

					<div className='content'>
						<div className='header left floated'>{user.login}</div>
						<div className='right floated meta'>
							<i className='users icon' /> &nbsp;
							{user.followers_url.length} followers
						</div>
					</div>

					<div className='extra content' align='center'>
						<button className='ui button small'>
							View Details
						</button>

						<a href={user.html_url} target='_blank' rel='noreferrer'>
							<button className='ui button small'>Github</button>
						</a>
					</div>
				</div>
			);
		});

		const pageCount = Math.ceil(users.length / usersPerPage);

		const pageChange = ({selected}) => {
			setPageNumber(selected);
		};
	

	return (
		<div className="users-list">

			<div className="search-results-number">
				<h4>{users.length} Results</h4>
			</div>

			<div className="ui three cards" style={{ padding: '5rem' }}>
				{/*{users.map(userCard => 
					<UserCard key={userCard.id} userCard={userCard}/>
					)}*/}
				{displayUsers}
				<ReactPaginate
					previousLabel={'Prev'}
					nextLabel={'Next'}
					pageCount={pageCount}
					onPageChange={pageChange}
					containerClassName={'paginationButtons'}
					previousLinkClassName={'previousButton'}
					nextLinkClassName={'nextButton'}
					disabledClassName={'paginationDisabled'}
					activeClassName={'paginationActive'}
				/>

			</div>

		</div>
	)
}

export default UserList; 
