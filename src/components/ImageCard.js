import { Component, createRef } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };
    this.imageRef = createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { urls, alt_description } = this.props;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`, margin: "0 2px" }}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={alt_description}
          className="ui rounded image"
        />
      </div>
    );
  }
}

export default ImageCard;
