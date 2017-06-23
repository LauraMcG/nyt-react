// Include React
var React = require("react");

var Results = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body">
              <p>{this.props.searchResults}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;
