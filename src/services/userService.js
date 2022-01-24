import axios from 'axios';
import { baseUrl } from '../../utils';

export const doLogin = async user => {
	const response = await axios.post(`${baseUrl}/api/login`, user);
	return response.data;
};

export const doRegister = async user => {
	const response = await axios.post(`${baseUrl}/api/users`, user);
	return response.data;
};