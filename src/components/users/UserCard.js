import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate'; 


const UserCard = ({ user }) => {

	const history = useHistory()

	const userDetailsPage = () => {
		history.push('/userpage')
	}



	return (
		<div className="user-card ui card" key={user.id} user={user} style={{ margin: '1em' }}>
			
			<div className="image">
				<img src={user.avatar_url} alt={user.login}/>
			</div>

			<div className="content">
				<div className="header left floated">
					{user.login}
				</div>
				<div className="right floated meta">
					<i className="users icon" /> 
					{user.followers_url.length} followers 
				</div>
			</div>

			<div className="extra content" align="center">
				<button className="ui button small" onClick={userDetailsPage}>View Details</button>
			
				<a href={user.html_url} target="_blank" rel="noreferrer">
					<button className="ui button small">Github</button>
				</a>
		</div>
	</div>
	)
}

export default UserCard
