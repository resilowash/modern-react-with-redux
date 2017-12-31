// get react from installed modules and allow access to it in this file
import React, { Component } from 'react';
//need to import react-dom in order to render to the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//local imports relative path to the file we are importing from
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// I don't like storing this here... Security risk..  API key from google for youtube.
const API_KEY='AIzaSyDrnzQFNaoNVj9pZnmhY7XL-7PranyuNos';

//Sample search


// Create a new component
// Component should produce some HTML
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
       videos: [],
    selectedVideo: null
  };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //with ES6 the syntax this.setState({videos: videos}) can be simply this.setState({ videos }). Syntactic sugar for key value pair that is the same.
    });
  }

  render() {
    return (<div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
      onVideoClick={selectedVideo => this.setState({selectedVideo}) }
      videos={this.state.videos}/>
    </div>);
  }

}



// Component needs inserted into the DOM. Component's generated html is placed on the page (via the DOM)
//html entry point is the div container
ReactDOM.render(<App />, document.querySelector('.container'));
