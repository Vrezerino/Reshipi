import React/*, { useState }*/ from 'react';
import { Link } from 'react-router-dom';

const MealThumb = ({ idMeal, strMealThumb, strMeal, /*wait*/ }) => {
	/*
	const [visible, setVisible] = useState(false);

	setTimeout(() => {
		setVisible(true);
	}, wait * 15);
	*/

	return /*visible &&*/ (
		<Link key={idMeal} to={`/meal/${idMeal}`} className='list-item' style={{ backgroundImage: `url(${strMealThumb})` }}>
			<div
				className='list-item-name'>
				{strMeal}
			</div>
		</Link>
	);
};

export default MealThumb;