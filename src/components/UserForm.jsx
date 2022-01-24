import React, { useState } from 'react';

const UserForm = () => {
	const [checked, setChecked] = useState(false);
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
								<input type='username' placeholder='Username' />
							</td>
						</tr>
						<tr>
							<td>
								<input type='password' placeholder='Password' />
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	);
};

export default UserForm;