import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Loading from "./Loading";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit("Cartoon");
  }

  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: process.env.REACT_APP_KEY,
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  renderLoading = () => {
    if (!this.state.videos.length) {
      return <Loading />;
    } else {
      return (
        <div className="doubling two column row">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">{this.renderLoading()}</div>
      </div>
    );
  }
}

export default App;
