import React from 'react'
import UserCard from './UserCard';
import UserAvatar from './UserAvatar'; 



const UserList = ({ users }) => {	

	return (
		<div className="users-list">

			<div className="search-results-number">
				<h4>{users.length} Results</h4>
			</div>

			<div className="ui three cards" style={{ padding: '5rem' }}>
				{users.map(user =>
					<li key={user.id} className="user-list-item">
					<UserAvatar
							url={user.avatar_url + '&size=50'}
							link={user.html_url}
							altText={user.login}
							title={user.login}
					/>
					<UserCard user={user} />
					</li>
					)}
			</div>

		
		</div>
	)
}

export default UserList; 
