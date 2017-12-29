import React, {Component} from 'react';
//import react any time you are using JSX.

class SearchBar extends Component {
  //render must be implemented when you extend React.Component
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }

  //event syntax start with 'on' or 'handle' <element><actionperformed>
  //event handlers are called with event objects.
  onInputChange(event) {
    //on input change console log the changing input
    console.log(event.target.value);
  }

}

export default SearchBar;
