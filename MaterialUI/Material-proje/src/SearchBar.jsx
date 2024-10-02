import React from 'react'
import TextField from "@mui/material/TextField";

function SearchBar() {
  return (
    <div>
      <h1>This is a search bar.</h1>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
    </div>
  );
}

export default SearchBar
