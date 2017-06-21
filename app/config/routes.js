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

module.exports = (

	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>

); //end exports