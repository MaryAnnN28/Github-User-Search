import React from 'react'
import UserCard from './UserCard'; 




const UserList = ({ users }) => {
	

	return (
		<div className="users-list">

			<div className="search-results-number">
				<h4>{users.length} Results</h4>
			</div>

			<div className="ui three cards" style={{ padding: '5rem' }}>
				{users.map(user => 
					<UserCard key={user.id} user={user}/>
					)}
			</div>

		</div>
	)
}

export default UserList; 
