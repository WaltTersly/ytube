import React from "react";
import SearchBar from "./Compnents/SearchBar";
import Youtube from "./APIs/Youtube";
import VideoList from "./Compnents/VideoList";
import VideoDetails from "./Compnents/VideoDetails";



class App extends React.Component {

// define state to handle the array of videos collected from api
  state = { videos: [], selectedVideo: null };

// a function to perform defailt search
  componentDidMount(){
    this.onTextSubmit('toys');
  }

// when text in the input in submitted.. perform async operation
  onTextSubmit = async (text) => {
    const response = await Youtube.get('/search', {
      params: {
        q: text
      }

    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0] 
    });
  };

  onVideoSelect = (video) => {
    console.log('from APP Component', video);
    this.setState({ selectedVideo: video});
  };
  
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit = {this.onTextSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
