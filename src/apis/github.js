import axios from 'axios';

export const API_LIMIT = 1000;
export const PER_PAGE = 30;

const MAX_PAGES = Math.ceil(API_LIMIT / PER_PAGE);

export const fetchUsers = async (searchTerm, currentPage) => {
	let url = `https://api.github.com/search/users?q=${searchTerm}`;
	if (currentPage && currentPage > 1) {
		url += `&page=${currentPage}`;
	}
	let response = await axios.get(url);
	if (response && response.data) {
		let {total_count, items} = response.data;

		let pageCount = 1;
		if (total_count > PER_PAGE) {
			pageCount =
				total_count > API_LIMIT
					? MAX_PAGES
					: Math.ceil(total_count / PER_PAGE);
		}

		return {
			pageCount,
			currentPage,
			total_count,
			items,
		};
	} else {
		return null;
	}
};
