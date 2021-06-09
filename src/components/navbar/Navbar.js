import React from 'react';
import './Navbar.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 

const Header = () => {
	return (
		<div className="navbar-main">
			<div className="navbar-left" style={{ color: 'white' }}>
				<Icon name="github" size="big"/>
			</div>
			<div className="navbar-left2" style={{ color: 'white' }}>
				<Link to="/">
					<h2>GitHub User Search</h2>
				</Link>
			</div>

			<div className="navbar-right">
				
			</div>
			
		</div>
	)
}

export default Header; 
