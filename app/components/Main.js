// Include React
var React = require("react");

var Router = require('react-router');
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return ( 
        <div className="container">

        {/*jumbotron */}
          <div className="jumbotron">
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
          </div>

          {this.props.children}

        </div>


    );
  }
});


module.exports = Main;