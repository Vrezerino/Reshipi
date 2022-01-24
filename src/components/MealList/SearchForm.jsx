import React from 'react';
import { useStateValue } from '../../state';
import { setIngredientSearchTerms } from '../../state';
const SearchForm = ({ allIngredients, searchByMealName, searchByIngredients, clearSearches }) => {
	const [{ allMeals, mealResults, ingredientSearchTerms }, dispatch] = useStateValue();

	return(
		<div className='search'>
			<div>
				<form>
					{!mealResults || mealResults.length === 0
						? <div>Search all {allMeals.length} meal names</div>
						: <div>{mealResults.length} results</div>}
					<input type='text' id='mealNameSearch' onChange={searchByMealName} />
				</form>
			</div>
			<div>
				<form onSubmit={searchByIngredients}>
					{!mealResults || mealResults.length === 0
						? <div>Search with ingredients ({allIngredients.length} total)</div>
						: <div>{mealResults.length} results</div>}
					<input type='text' id='ingSearch' />
					<button type='submit' className='ingredientBtn'>Add</button>
				</form>
			</div>
			<div>
				<form onSubmit={clearSearches}>
					<button type='submit' className='clearSearches'>Clear searches</button>
				</form>
			</div>
			<div>
				{ingredientSearchTerms.map((st, i) =>
					<span key={i} className='ingredientElem'>{st}
						<span onClick={
							() =>
							// Remove ingredient search term.
								dispatch(setIngredientSearchTerms(ingredientSearchTerms.filter(ing => ing !== st)))}> ❌
						</span>
					</span>)
				}
			</div>
		</div>
	);
};

export default SearchForm;