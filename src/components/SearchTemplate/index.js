import React from "react";
import "./index.css"
// import { Link } from "react-router-dom";

function SearchForm(props) {
  return (
        <form className="p-5 m-2">
        <div className="form-group">
            <label className="search-heading" htmlFor="search">Search</label>
            <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Enter in your search item"
            id="search"
            />
            <div className="d-flex justify-content-center">
            <button id="submit-button" onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
             Search
            </button>
            </div>
        </div>
        </form>
  );
}

export default SearchForm;
