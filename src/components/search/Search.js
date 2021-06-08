import React, { useState } from 'react';
import './Search.css';
import { Form } from 'semantic-ui-react';


const Search = ({ onFormSubmit }) => {

	const [term, setTerm] = useState('');

	const handleSearch = event => {
		event.preventDefault();
		onFormSubmit(term); 
	}


	return (
		<div>
			
			<div className='search'>
				<Form onSubmit={handleSearch}	>
					<Form.Group>
						<Form.Input
							placeholder='Search for Users'
							value={term}
							onChange={event => setTerm(event.target.value)} />
						<Form.Button
							content='Search'
							type="submit"
						/>
					</Form.Group>
				</Form>
			</div>

		</div>
	);
};

export default Search;
