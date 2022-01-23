import axios from 'axios';
import { baseUrl } from '../../utils';
import { testMeals } from '../utils/testMeals';

export const fetchMeals = async () => {
	if (process.env.NODE_ENV === 'none') { // none = test mode
		return testMeals;
	} else {
		const response = await axios.get(`${baseUrl}/api/meals`);
		return response.data.meals; // return meals array to dispatch
	}
};