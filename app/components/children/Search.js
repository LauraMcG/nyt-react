// Include React
var React = require("react");

var Search = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
              Search me!
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Search;
