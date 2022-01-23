import { useEffect, useState } from 'react';
import axios from 'axios';

const useApi = (url) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then(response => setData(response.data.meals))
			.catch(setError)
			.finally(() => setIsLoading(false));
	}, [url]);

	return { data, isLoading, error };
};

export { useApi };
