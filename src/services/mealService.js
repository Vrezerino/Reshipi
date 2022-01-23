import axios from 'axios';
import { baseUrl } from '../../utils';

export const fetchMeals = () => {
	const response = axios.get(`${baseUrl}/api/meals`);
	return response.data;
};