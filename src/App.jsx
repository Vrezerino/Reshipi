import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MealPage from './MealPage';
import MealList from './MealList/';
import { meals as allMeals } from './data/allMeals.json';

const App = () => {
	const [results, setResults] = useState([]);
	const meals = results && results.length > 0 ? results : allMeals;
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
