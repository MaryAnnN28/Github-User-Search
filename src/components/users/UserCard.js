import React from 'react'
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
	return (
		<div className="user-card ui card" key={user.id} user={user} style={{ margin: '1em' }}>
			
			<div className="content">
				<div className="header left floated">
					{user.login}
				</div>
				<div className="right floated meta">
					<i className="users icon"></i>
					{user.followers_url.length} followers 
				</div>
			</div>

			<div className="image">
				<img src={user.avatar_url} alt={user.login}/>
			</div>


			<div className="content" align="center">
					<Link to={'/users'}>
						<button className="ui button small">View Details</button>
					</Link>
			
					<a href={user.html_url} target="_blank" rel="noreferrer">
						<button className="ui button small">Github</button>
					</a>
		</div>
	</div>
	)
}

export default UserCard
