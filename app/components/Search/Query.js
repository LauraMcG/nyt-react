// Include React
var React = require("react");


//sets the search term to a generic state
var Query = React.createClass({

  //set the initial state
  getInitialState: function() {
    return {
      searchTerm: "",
      searchResults: {}
    };
  },

  //this handles the change in the search term
  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);

  },

  //this function handles the submit button
  handleSubmit: function(event) {
    //don't let the form submit itself.
    event.preventDefault();

    //give the search term to main
    this.props.setSearch(this.state.searchTerm);
    //resets the input upon submit
    this.setState({searchTerm: ""});
  },

  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
          {/*note the handleSubmit*/}
              <form onSubmit ={this.handleSubmit}>
                <div className="form-group">
                  <h4>Keyword</h4>
                  <input type="text" value={this.state.searchTerm} className="form-control" id="searchTerm" onChange={this.handleChange} required />
                  <br/>
                  <button className="btn btn-primary" type="submit">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Query;
