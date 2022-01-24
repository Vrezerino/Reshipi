import React, { useState } from 'react';
import { useStateValue } from '../state';
import { setNotification } from '../state';
import { doLogin, doRegister } from '../services/userService';

const UserForm = () => {
	const [, dispatch] = useStateValue();
	const [checked, setChecked] = useState(false); // true = show register form.

	const onSubmit = async e => {
		e.preventDefault();
		if (e.target.register.checked) {
			try {
				const loggedInUser = await doRegister({ username: e.target.username.value, password: e.target.password.value });
				console.log(loggedInUser);
			} catch (err) {
				dispatch(setNotification(err.message));
			}
		} else {
			try {
				const loggedInUser = await doLogin({ username: e.target.username.value, password: e.target.password.value });
				console.log(loggedInUser);
			} catch (err) {
				dispatch(setNotification(err.message));
			}
		}
	};

	return (
		<div className='userForm'>
			<form onSubmit={onSubmit}>
				<input hidden
					type='text'
					placeholder='Username'
					autoComplete='username'
					readOnly />
				<table>
					<tbody>
						<tr>
							<td>
								<input
									className='checkbox'
									type='checkbox'
									id='register'
									name='register'
									onChange={() => {
										setChecked(!checked);
									}} />
								<span className='doRegister'>
									Check this box if you wish to register instead
								</span>
							</td>
						</tr>
						<tr>
							<td>
								<input
									type='username'
									placeholder='Username'
									id='username'
									name='username' />
							</td>
						</tr>
						<tr>
							<td>
								<input
									type='password'
									placeholder='Password'
									id='password'
									name='password'
									autoComplete='current-password' />
							</td>
						</tr>
						<tr>
							<td>
								<button type='submit' className='userFormBtn'>Go!</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	);
};

export default UserForm;