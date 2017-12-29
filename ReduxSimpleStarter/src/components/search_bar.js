import React, {Component} from 'react';
//import react any time you are using JSX.

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value' };
  }

  //render must be implemented when you extend React.Component
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})} />
      </div>
    );
  }



}

export default SearchBar;
