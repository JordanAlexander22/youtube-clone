import React from "react";

import { Paper, TextField } from "@material-ui/core";

// using class component here because state will be managed in this component
class SearchBar extends React.Component {
  state = {
    searchTerm: " "
  };

  render() {
    return (
      <Paper elevation={6} style={{padding: '1.5rem'}}>
        <form>
          <TextField fullWidth label="Search"></TextField>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
