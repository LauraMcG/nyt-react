// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Search = require('./children/Search');

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return ( 
        <div className="container">

        {/*jumbotron */}
          <div className="jumbotron">
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
          </div>

          <div className="row">
            <Search />
          </div>

        </div>


    );
  }
});


module.exports = Main;