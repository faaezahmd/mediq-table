import React from "react";
import { setSearchQuery } from "../actions/orderActions";
import { useDispatch } from "react-redux";
import "./SearchBar.scss";

function SearchBar() {
  const dispatch = useDispatch();
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => dispatch(setSearchQuery(e.currentTarget.value))}
        className="search-input"
        placeholder="Search by Order Id, Customer, Buyer..."
      />
    </div>
  );
}

export default SearchBar;
