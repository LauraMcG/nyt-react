// Include React
var React = require("react");

var Results = React.createClass({

  getInitialState: function() {
    return { searchResults: {}
    };
  },

  //creating a function to list the result objects

  // renderResults: function(data) {
  //   return (



  // },

  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body">
              <p>
              {/* get back to this */}
                {this.props.searchResults ? this.props.searchResults.map(function(article, i) {
                  return(
                    <p key={i}>{article.headline.main}</p>
                  )
                }) : <p>Loading...</p>}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;
