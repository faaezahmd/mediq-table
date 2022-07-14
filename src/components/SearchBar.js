import React from "react";
import { setSearchQuery } from "../actions/orderActions";
import { useDispatch } from "react-redux";

function SearchBar() {
  const dispatch = useDispatch();
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => dispatch(setSearchQuery(e.currentTarget.value))}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
