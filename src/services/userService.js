import axios from 'axios';
import { baseUrl } from '../../utils';

export const doLogin = async user => {
	const response = axios.post(`${baseUrl}/login`, user);
	return response.data;
};

export const doRegister = async user => {
	const response = axios.post(`${baseUrl}/users`, user);
	return response.data;
};