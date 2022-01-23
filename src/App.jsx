import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MealPage from './MealPage';
import MealList from './MealList/';
import { meals as allMeals } from './data/allMeals.json';
import { useStateValue } from './state';
import { setResults, setNotification } from './state';

const App = () => {
	//const [results, setResults] = useState([]);

	const [{ mealResults }, dispatch] = useStateValue();
	const meals = mealResults && mealResults.length > 0 ? mealResults : allMeals;
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<MealList
						allMeals={allMeals}
						results={results}
						setResults={setResults} />
				</Route>
				<Route path='/meal/:id' render={(routeParams) => {
					const index = meals.map(m => m.idMeal).indexOf(routeParams.match.params.id);
					const meal = meals[index];
					const previous = meals[(((index-1) % meals.length) + meals.length) % meals.length];
					const next = meals[(index+1) % meals.length];
					return <MealPage meal={meal} previous={previous} next={next} />;
				}} />
			</Switch>
		</Router>
	);
};

export default App;
