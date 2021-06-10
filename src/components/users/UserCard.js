import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Actions, AppContext } from '../App'; 

const UserCard = ({ user }) => {

	const [info, setInfo] = useState(null);
	const { dispatch, rateLimitExceeded } = useContext(AppContext);
	
	useEffect(() => {
		if (user && !rateLimitExceeded) {
			axios.get(user.url)
				.then(res => setInfo(res.data))
				.catch(e => {
					if (e.response.status === 403) {
					
						const { headers } = e.response;
						const remaining = parseInt(headers['x-ratelimit-remaining']);
						if (remaining === 0) {
							if (headers['x-ratelimit-reset']) {
								const resetTime = parseInt(headers['x-ratelimit-reset']) * 1000;
								const countdown = resetTime - Date.now();
								console.debug(
									`%c[RATE_LIMIT] Too many API calls have been made. You have to wait another ${(countdown / 60000).toFixed(1)} minutes before searching again`, 'color: magenta;');
								dispatch({ type: Actions.RateLimitExceeded, payload: true });
							}
						}
					}
				});
		}
	}, [user, rateLimitExceeded, dispatch]); 

	return (
		<div className={`user-card ui card ${rateLimitExceeded ? 'show-less' : ''} key=${user.id} user=${user} style={{ margin: '1em' }`} >
			
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
			
					<a href={user.html_url} target="_blank" rel="noreferrer">
						<button className="ui button small">Github</button>
					</a>
		</div>
	</div>
	)
}

export default UserCard
