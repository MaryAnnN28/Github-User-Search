import React from 'react'

const Pagination = (props) => {
	const pageLinks = []

	for (let i = 1; i <= props.pages + 1; i++) {
		let active = props.currentPage == i ? 'active' : '';
		
		pageLinks.push(<li className={`active ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#"></a></li>)
	}
		
		
	return (
		<div className="ui container">
			
		</div>
	)
}

export default Pagination; 
