import React from "react";

class SearchBar extends React.Component {
  //event handler naming convention
  // on <element> <event to watch>

  state = { term: "" };
  /*
  onInputChange(event) {
    console.log(event.target.value);
  }
*/

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  // input is a controlled element by taking the changed value
  // setting the state and using the state to update the input
  // with the same value
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

//  <input type="text" onChange={this.onInputChange}/>
// don't use this.onInputChange() for event handlers

//  <input type="text" onChange={(this.onInputChange)} />
//  can be refactored to
//  <input type="text" onChange={(e) => console.log(e.target.value)} />
//  if you have one line to execute

//  default form try to submit and refresh the page when you press enter
// this behavior can be stopped by using the preventDefault()
