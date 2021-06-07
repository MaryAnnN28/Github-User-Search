import React from 'react'
import { Link } from 'react-router-dom'; 

const UserList = ({ users }) => {
	return (
		<div className="users-list">
			<div class="ui special cards" style={{ marginTop: '2rem'}}>
		{users.map(user => 
				<div class="card" key={user.id} user={user}>
					<div class="blurring dimmable image">
						<div class="ui dimmer">
							<div class="content">
								<div class="center">
									<div class="ui inverted button">View</div>
								</div>
							</div>
						</div>
						<img src={user.avatar_url} alt={user.login}/>
					</div>
					<div class="content">
					<a class="header">{user.login}</a>

						<div class="meta">
							<a>
								<i class="users icon"></i>
								{user.followers_url.length}
							</a>
						</div>
					</div>
				<div class="extra content">
					<a href={user.html_url}>View {user.login}'s GitHub Page</a>
					</div>
				</div>
				
		)}
			</div>
		</div>
	)
}

export default UserList; 
