import React from "react";

function SearchBar(props) {

    return (
        <form class="d-flex">
            <input onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search For an Employee"
                id="search" />
            <button class="btn btn-primary" onClick={props.handleFormSubmit}>Search</button>
        </form>
    )
}

export default SearchBar