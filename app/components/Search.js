// Include React
var React = require("react");

var helpers = require('../utils/helpers')
// requiring the children
var Query = require('./Search/Query');
var Results = require('./Search/Results');

var Search = React.createClass({

  //set the initial state
  getInitialState: function() {
    return {
      searchTerm: "",
      searchResults: {}
    };
  },

  componentDidUpdate: function(prevProps, prevState) {
    // If we have a new search term, run a new search
    if (prevState.searchTerm !== this.state.searchTerm) {
      helpers.runQuery(this.state.searchTerm).then(function(data) {
        console.log(data);
        
        // console.log(data.response.docs[0].headline.main);

        if (data !== this.state.searchResults) {
          this.setState({ searchResults: data});
          console.log(this.searchResults);
        }
        // note this
      }.bind(this));
      // this.setState({searchResults: this.state.searchTerm });
    }
  },

  setSearch: function(searchTerm) {
    this.setState({ searchTerm: searchTerm });
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

//!!! create this function in the main file.
    //give the search term to main
    this.props.setSearch(this.state.searchTerm);
    //resets the input upon submit
    this.setState({searchTerm: ""});
  },

  render: function() {
    return (
      <div>
        <Query setSearch={this.setSearch}/>

        <Results searchResults={this.state.searchResults}/>
      </div>

    );
  }
});

module.exports = Search;
