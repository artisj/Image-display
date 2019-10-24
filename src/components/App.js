import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  //  Get the data from the searchbar into App component
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 46e3800120a0c1b58608e6ba08e20de2b477d480d3a6ed22e8950d092863bb47"
        }
      })
      .then(response => {
        console.log(response);
      });
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
