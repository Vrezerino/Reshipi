import React, { useState } from 'react';
import { useStateValue } from '../../state';
import { setResults, setIngredientSearchTerms } from '../../state';
import { mapRecipeInfo } from '../../utils/mapRecipeInfo';
import Header from '../Header';
import MealThumb from './MealThumb';
import SearchForm from './SearchForm';
import reshipi from '../../../public/img/reshipi.png';
import loading from '../../../public/img/loading.gif';

const MealList = () => {
	const [{ allMeals, mealResults, ingredientSearchTerms }, dispatch] = useStateValue();
	const meals = mealResults && mealResults.length > 0 ? mealResults : allMeals;

	// Get all unique ingredients from all meals.
	const allIngredients = [];
	allMeals.forEach(m => {
		const mealIngredients = mapRecipeInfo(m, 'strIngredient');
		mealIngredients.forEach(ing => {
			if (!allIngredients.includes(ing)) {
				allIngredients.push(ing);
			}
		});
	});

	const searchByMealName = e => {
		const searchTerm = e.target.value.toLowerCase().trim();
		if (searchTerm.length > 0) {
			const filteredMeals = !ingredientSearchTerms || ingredientSearchTerms.length === 0
				? allMeals.filter(m => m.strMeal.toLowerCase().includes(searchTerm))
				: meals.filter(m => m.strMeal.toLowerCase().includes(searchTerm));
			dispatch(setResults(filteredMeals));
		} else {
			dispatch(setResults([]));
		}
	};
	// Push meal to results if it has all searched ingredients.
	const searchByIngredients = e => {
		e.preventDefault();
		const searchTerm = e.target.ingSearch.value.toLowerCase().trim();
		if (!ingredientSearchTerms.includes(searchTerm)) {
			dispatch(setIngredientSearchTerms(ingredientSearchTerms.concat(searchTerm)));
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
		dispatch(setResults(filteredMeals));
	};

	const clearSearches = e => {
		e.preventDefault();
		dispatch(setResults([]));
		dispatch(setIngredientSearchTerms([]));
	};

	if (!meals.length || meals.length === 0) {
		return (
		<>
			<Header />
			<div className='loading'><img src={loading} /></div>
		</>);
	}

	return (
		<>
			<Header />
			<SearchForm
				allIngredients={allIngredients}
				searchByMealName={searchByMealName}
				searchByIngredients={searchByIngredients}
				clearSearches={clearSearches} />

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
			<footer>
				© 2021-2023 Patrick Park
			</footer>
		</>
	);
};

export default MealList;
