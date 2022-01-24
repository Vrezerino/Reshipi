import React from 'react';
import { Link } from 'react-router-dom';
import { mapRecipeInfo } from '../utils/mapRecipeInfo';

const MealPage = ({ meal, previous, next }) => {
	const formattedRecipeInstructions = meal.strInstructions.split('STEP');
	const ingredients = mapRecipeInfo(meal, 'strIngredient');
	const measures = mapRecipeInfo(meal, 'strMeasure');
	const ingredientsAndMeasures = ingredients.map((ing, i) => <div key={i}><b>{ing}</b>, {measures[i]}</div>);

	return (
		<>
			<div className='links'>
				{previous && <Link to={`/meal/${previous.idMeal}`}>Previous</Link>}
				<Link to="/">Home</Link>
				{next && <Link to={`/meal/${next.idMeal}`}>Next</Link>}
			</div>
			<div>
				<div className='meal-image' style={{ backgroundImage: `url(${meal.strMealThumb})` }} />
				<div className='meal-info'>
					<div className='meal-name'>{meal.strMeal}</div>
					<p>{meal.strCategory}, {meal.strArea}</p>
				</div>
			</div>
			<div className='ingredients'>{ingredientsAndMeasures}</div>
			<div className='instructions'>
				{formattedRecipeInstructions.map(step => <p key={step}>{step}</p>)}
			</div>
		</>
	);
};

export default MealPage;
