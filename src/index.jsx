import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider, reducer } from './state';
import App from './App';
import './styles.css';

ReactDOM.render(
	<StateProvider reducer={reducer}>
		<App />
	</StateProvider>
	, document.getElementById('app'));
