import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MealPage from './MealPage';
import MealList from './MealList/';

import { setAllMeals, setResults, setNotification, useStateValue } from './state';
import { fetchMeals } from './services/mealService';

const App = () => {
	const [{ allMeals, mealResults }, dispatch] = useStateValue();

	const fetchData = async () => {
		try {
			//
			const data = await fetchMeals();
			dispatch(setAllMeals(data));
		} catch (e) {
			dispatch(setNotification(e.message));
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const meals = mealResults && mealResults.length > 0 ? mealResults : allMeals;
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<MealList
						allMeals={allMeals}
						results={mealResults}
						setResults={setResults} />
				</Route>
				<Route path='/meal/:id' render={(routeParams) => {
					const index = meals.map(m => m.idMeal).indexOf(routeParams.match.params.id);
					const meal = meals[index];
					const previous = meals[(((index - 1) % meals.length) + meals.length) % meals.length];
					const next = meals[(index + 1) % meals.length];
					return <MealPage meal={meal} previous={previous} next={next} />;
				}} />
			</Switch>
		</Router>
	);
};

export default App;
