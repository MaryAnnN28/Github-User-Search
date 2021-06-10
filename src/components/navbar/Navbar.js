import React from 'react';
import './Navbar.css';
import { Icon } from 'semantic-ui-react';

const Header = () => {
	return (
		<div className="navbar-main">
			<div className="navbar-left" style={{ color: 'white' }}>
				<Icon name="github" size="big"/>
			</div>
			<div className="navbar-left2" style={{ color: 'white' }}>
					<h2>GitHub User Search</h2>
			</div>

			<div className="navbar-right">
				
			</div>
			
		</div>
	)
}

export default Header; 
