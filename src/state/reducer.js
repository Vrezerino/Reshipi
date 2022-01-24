export const setAllMeals = meals => {
	return {
		type: 'SET_ALL_MEALS',
		payload: meals
	};
};

export const setResults = results => {
	return {
		type: 'SET_MEAL_RESULTS',
		payload: results
	};
};

export const setIngredientSearchTerms = searchTerms => {
	return {
		type: 'SET_INGREDIENT_SEARCH_TERMS',
		payload: searchTerms
	};
};

export const setNotification = notif => {
	return {
		type: 'SET_NOTIFICATION',
		payload: notif
	};
};

export const login = user => {
	return {
		type: 'LOGIN',
		payload: user
	};
};

export const reducer = (state, action) => {
	switch (action.type) {
	case 'SET_ALL_MEALS':
		return {
			...state,
			allMeals: [
				...action.payload
			],
			...state.allMeals
		};
	case 'SET_MEAL_RESULTS':
		return {
			...state,
			mealResults: [
				...action.payload
			],
			...state.mealResults
		};
	case 'SET_INGREDIENT_SEARCH_TERMS':
		return {
			...state,
			ingredientSearchTerms: [
				...action.payload
			],
			...state.ingredientSearchTerms
		};
	case 'SET_NOTIFICATION':
		return {
			...state,
			notification: action.payload
		};
	default:
		return state;
	}
};
