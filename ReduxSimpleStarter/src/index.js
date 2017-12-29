// get react from installed modules and allow access to it in this file
import React from 'react';
//need to import react-dom in order to render to the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//local imports relative path to the file we are importing from
import SearchBar from './components/search_bar';

// I don't like storing this here... Security risk..  API key from google for youtube.
const API_KEY='AIzaSyDrnzQFNaoNVj9pZnmhY7XL-7PranyuNos';

//Sample search
YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {console.log(data)}); 

// Create a new component
// Component should produce some HTML
const App = function() {
  return (<div>
    <SearchBar />
  </div>);
}



// Component needs inserted into the DOM. Component's generated html is placed on the page (via the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
