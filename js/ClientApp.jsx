import React from "react";
import { render } from "react-dom";
import { HashRouter, Route } from 'react-router-dom'
import Landing from './Landing'

const App = () => (
	<HashRouter>
	<div className="app">
		<Route exact path="/" component={Landing} />
	</div>
);

render(<App />, document.getElementById("app"));
