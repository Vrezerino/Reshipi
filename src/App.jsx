import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MealPage from './MealPage';
import MealList from './MealList/';

//import { meals as allMeals } from './data/allMeals.json';
import { useStateValue } from './state';
import { setAllMeals, setResults } from './state';

import { fetchMeals } from './services/mealService';

const App = () => {
	//const [results, setResults] = useState([]);
	useEffect(async () => {
		const data = await fetchMeals();
		dispatch(setAllMeals(data));
	}, [dispatch]);

	const [{ allMeals, mealResults }, dispatch] = useStateValue();
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
					const previous = meals[(((index-1) % meals.length) + meals.length) % meals.length];
					const next = meals[(index+1) % meals.length];
					return <MealPage meal={meal} previous={previous} next={next} />;
				}} />
			</Switch>
		</Router>
	);
};

export default App;
