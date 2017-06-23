// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// requiring the children
var Search = require('./children/Search');
var Results = require('./children/Results');
// var Saved = require('./children/Saved');

var Main = React.createClass({

 getInitialState: function() {
    return {
      searchTerm: "",
      searchResults: ""
    };
  },
  //eventually, this will run the NYT search query and display the results.
  //for now, it is simply displaying the results in the appropriate module.
  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm){
      // helpers.runQuery(this.state.searchTerm).then(function(data) {
      //   if (data !== this.state.results) {
      //     console.log(data);
      //     this.setState({ results: data }); }

      this.setState({searchResults: this.state.searchTerm });
    }
  },

  setSearch: function(searchTerm) {
    this.setState({ searchTerm: searchTerm });
  },

  // Here we render the function
  render: function() {

    return ( 
        <div className="container">

        {/*jumbotron */}
          <div className="jumbotron">
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
          </div>

          <div className="row"> 
            {/*sending the search child the setSearch function*/}
            <Search setSearch={this.setSearch}/>
            
          </div>

          <div className="row">
            <Results searchResults={this.state.searchResults}/>
          </div>

          <div className="row">

          </div>

        </div>


    );
  }
});


module.exports = Main;