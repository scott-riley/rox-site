/**
*	Super basic route setup that lets you have separate containers for your
* application and site.
**/
import React from "react";
import {Router, Route, IndexRoute} from "react-router";

// Marketing site
import SiteContainer from "./SiteContainer";
import Homepage from 'components/Site/Homepage/Homepage';
import Services from 'components/Site/Services/Services';
import Portfolio from 'components/Site/Portfolio/Portfolio';
import Hire from 'components/Site/Hire/Hire';

// Application
import AppContainer from "./AppContainer";
import MainScreen from 'components/App/MainScreen/MainScreen';

module.exports = (
	<Router>
		{/*Marketing site*/}
		<Route path="/" component={SiteContainer}>
			<IndexRoute component={Homepage} />
			<Route path="services" component={Services} />
			<Route path="portfolio" component={Portfolio} />
			<Route path="hire" component={Hire} />
		</Route>

		{/*Application*/}
		<Route path="/app" component={AppContainer}>
			<IndexRoute component={MainScreen} />
		</Route>
	</Router>
);
