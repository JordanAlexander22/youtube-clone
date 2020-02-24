import React from "react";
import { TextField } from "@material-ui/core";

// using class component here because state will be managed in this component
class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = e => this.setState({ searchTerm: e.target.value });
  //one line arrow function written because arrow functions do not have their own 'this' so we avoid binding

  handleSubmit = e => {
    const { searchTerm } = this.state; //destructuring
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    e.preventDefault();
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit}>
        <TextField fullWidth label="Search" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
