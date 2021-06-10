import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types'; 


const Pagination = ({ count, onChange }) => {
	return (
		<ReactPaginate
			previousLabel={"< Previous"}
			nextLabel={"Next >"}
			onPageChange={(e) => onChange(e.selected + 1)}
			pageCount={count}
			/>
		); 
};
	
Pagination.propTypes = {
	count: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
};

Pagination.defaultProps = {
	count: 1,
	onChange() {}
}
	
	
export default Pagination; 
