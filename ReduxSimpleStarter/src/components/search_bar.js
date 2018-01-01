import React, {Component} from 'react';
//import react any time you are using JSX.

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  //render must be implemented when you extend React.Component
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }



}

export default SearchBar;
