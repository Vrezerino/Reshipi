import axios from 'axios';
import { baseUrl } from '../../utils';

export const fetchMeals = async () => {
	const response = await axios.get(`${baseUrl}/api/meals`);
	return response.data;
};