import React, { useRef } from 'react';
import './Search.css';
import { Form } from 'semantic-ui-react';


const Search = ({ onSearch, loading }) => {

	const inputRef = useRef(null); 

	const onSubmit = event => {
		event.preventDefault();
		let val = inputRef.current.value;
		if (val) {
			onSearch(val);
		}
	}; 


	return (
		<div>
			
			<div className='search'>
				<Form onSubmit={onSubmit}	>
					<Form.Group>
						<Form.Input
							placeholder='Search for Users'
							disabled={loading}
							ref={inputRef} />
						<Form.Button
							content='Search'
							type="submit"
							disabled={loading}
						/>
					</Form.Group>
				</Form>

			</div>

		</div>
	);
};

export default Search;
