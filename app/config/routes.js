//DEPENDEINICES
var React = require('react');

var router = require('react-router');
// allows us to display individual routes
var Route = router.Route;
// Router contains all of our routes
var Router = router.Router;

var hashHistory = router.hashHistory;

//catch-all route
var IndexRoute = router.IndexRoute;

//high-level components

var Main = require('../components/Main');
// var Search = require("../components/children/Search");
// var Results = require("../components/children/Results");
// var Saved = require("../components/children/Saved");


module.exports = (

	<Router history={hashHistory}>
		<Route path='/' component={Main}>


		<IndexRoute component={Main} />		

		</Route>
	</Router>

); //end exports