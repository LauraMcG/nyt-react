// Include React
var React = require("react");

var Results = React.createClass({

  getInitialState: function() {
    return { searchResults: {}
    };
  },

  //creating a function to list the result objects

  renderResults: function(data) {
    return (
      <div className="responses">
              <p>test</p>
              {this.searchResults.docs[0].headline.main}                               
          </div>
          )

  },

  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body">
              <p>{this.props.renderResults}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;
