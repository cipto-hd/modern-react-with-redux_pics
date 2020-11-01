import { Component } from "react";
import { getUnsplashImages } from "../api/Unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    isSearched: false,
    isLoading: false,
    images: [],
  };
  onSearchSubmit = async (term) => {
    this.setState({ isSearched: true, isLoading: true });
    const images = await getUnsplashImages(term);
    this.setState({ images, isSearched: true, isLoading: false });
  };

  render() {
    const { isSearched, isLoading, images } = this.state;
    return (
      <div className="ui container" style={{ paddingTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {isSearched &&
          (isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>Found: {images.length} images</div>
          ))}
        {images.length !== 0 && !isLoading && <ImageList images={images} />}
      </div>
    );
  }
}

export default App;
