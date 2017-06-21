// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return ( 

      <div className="container">
        <div className="jumbotron">
          <h2><strong>It works!</strong></h2>
          <p><em>Router connected!</em></p>
          <hr />
          <p>
          </p>
        </div>

        <div className="row">

          

        </div>

      </div>

    );
  }
});


module.exports = Main;