import React, { useState } from 'react';
import axios from 'axios';

const [query, setQuery] = useState(''); 

export default axios.create({
	baseURL: 'https://api.github.com/search/users',
	params: {
		q: query
	}
})

//useEffect(() => {
//	fetch(`https://api.github.com/search/users?q=${users}+in:user`)
//		.then(res => res.json())
//		.then(data => {
//		setUsers(data.items)
//	})
//})