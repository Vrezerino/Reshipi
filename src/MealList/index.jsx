import React, { useState } from 'react';
import { mapRecipeInfo } from '../utils/mapRecipeInfo';
import MealThumb from './MealThumb';

const MealList = ({ results, allMeals, setResults }) => {
	const meals = results && results.length > 0 ? results : allMeals;
	const [ingredientSearchTerms, setIngredientSearchTerms] = useState([]);

	// Get all non-repeating ingredients from all meals.
	const allIngredients = [];
	allMeals.forEach(m => {
		const mealIngredients = mapRecipeInfo(m, 'strIngredient');
		mealIngredients.forEach(ing => {
			if (!allIngredients.includes(ing)) {
				allIngredients.push(ing);
			}
		});
	});

	const searchByMealName = event => {
		const searchTerm = event.target.value.toLowerCase().trim();
		if (searchTerm.length > 0) {
			const filteredMeals = !ingredientSearchTerms || ingredientSearchTerms.length === 0
				? allMeals.filter(m => m.strMeal.toLowerCase().includes(searchTerm))
				: meals.filter(m => m.strMeal.toLowerCase().includes(searchTerm));
			setResults(filteredMeals);
		} else {
			setResults([]);
		}
	};
	// Push meal to results if it has all searched ingredients.
	const searchByIngredients = event => {
		event.preventDefault();
		const searchTerm = event.target.ingSearch.value.toLowerCase().trim();
		if (!ingredientSearchTerms.includes(searchTerm)) {
			setIngredientSearchTerms(ingredientSearchTerms.concat(searchTerm));
		}

		const filteredMeals = [];
		meals.forEach(m => {
			const mealIngredients = mapRecipeInfo(m, 'strIngredient');
			let hasAllIngs = false;
			mealIngredients.forEach(ing => {
				if (ing === searchTerm) {
					hasAllIngs = true;
				}
			});
			if (hasAllIngs) filteredMeals.push(m);
		});
		setResults(filteredMeals);
	};

	const clearSearches = event => {
		event.preventDefault();
		setResults([]);
		setIngredientSearchTerms([]);
	};

	return (
		<>
			<div className='title'>Retsipi</div>
			<div className='intro'>Find delicious recipes and filter with name and/or ingredients.</div>
			<div className='search'>
				<div>
					<form>
						{!results || results.length === 0
							? <div>Search all {allMeals.length} meal names</div>
							: <div>{results.length} results</div>}
						<input type='text' id='mealNameSearch' onChange={searchByMealName} />
					</form>
				</div>
				<div>
					<form onSubmit={searchByIngredients}>
						{!results || results.length === 0
							? <div>Search with ingredients ({allIngredients.length} total)</div>
							: <div>{results.length} results</div>}
						<input type='text' id='ingSearch' />
						<button type='submit' className='ingredientBtn'>Add</button>
					</form>
				</div>
				<div>
					<form onSubmit={clearSearches}>
						<button type='submit' className='ingredientBtn'>Clear searches</button>
					</form>
				</div>
				<div>
					{ingredientSearchTerms.map((st, i) =>
						<span key={i} className='ingredientElem'>{st}
							<span onClick={
								() =>
									setIngredientSearchTerms(ingredientSearchTerms.filter(ing => ing !== st))}> (x)
							</span>
						</span>)
					}
				</div>
			</div>
			<div className='list-container'>
				{meals.map(({ idMeal, strMeal, strMealThumb }, i) => (
					<MealThumb
						key={idMeal}
						idMeal={idMeal}
						strMeal={strMeal}
						strMealThumb={strMealThumb}
						wait={i} />
				))}
			</div>
		</>
	);
};

export default MealList;
