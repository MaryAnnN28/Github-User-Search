import React, { useState, useEffect } from 'react'
import { Segment } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 



const UserList = ({ users }) => {

	const [followers, setFollowers] = useState(null); 

	const fetchFollowers = () => {
		axios.get('https://api')
	}






	return (
		<div className="users-list" style={{ marginTop: '2em' }}>

			<div className="search-results-number">
				<h4>{users.length} Results</h4>
			</div>

			<Segment>

			<div className="ui special cards" style={{ marginTop: '2rem' }}>
				{users.map(user => 
				<div className="user-card card" key={user.id} user={user}>
					<div className="blurring dimmable image">
						<div className="ui dimmer">
							<div className="content">
								<div className="center">
									<div className="ui inverted button">View</div>
								</div>
							</div>
						</div>
							<img src={user.avatar_url} alt={user.login}/>
					</div>
					<div className="content">
					<a className="header">{user.login}</a>

						<div className="meta">
							<a>
								<i className="users icon"></i>
								{user.followers_url.length}
							</a>
						</div>
					</div>
					<div className="extra content" align="center">
							<a href={user.html_url} target="_blank">
								<button className="ui button">View More</button>
							</a>
							<a href={user.html_url} target="_blank">
								<button className="ui button">View Github</button>
							</a>
					</div>
				</div>
				
					)}
			</div>
			</Segment>
		</div>
	)
}

export default UserList; 
