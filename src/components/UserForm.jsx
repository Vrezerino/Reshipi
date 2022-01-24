import React, { useState } from 'react';

const UserForm = () => {
	const [checked, setChecked] = useState(false); // true = show register form.
	return (
		<div className='userForm'>
			<form>
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
								<input type='username' placeholder='Username' />
							</td>
						</tr>
						<tr>
							<td>
								<input type='password' placeholder='Password' autoComplete='current-password'/>
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