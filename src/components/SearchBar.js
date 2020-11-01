import { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="searchTerm">Search Images</label>
            <input
              type="text"
              id="searchTerm"
              name="searchTerm"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
