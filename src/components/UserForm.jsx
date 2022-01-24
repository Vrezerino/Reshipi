import React from 'react';

const UserForm = () => {
	return(
		<div className='userForm'>
			<form>
				<input type='text' placeholder='Username'/>
				<input type='password' placeholder='Password'/>
			</form>
		</div>
	);
};

export default UserForm;