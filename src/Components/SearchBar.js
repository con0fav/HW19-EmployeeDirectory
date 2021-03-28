import React from "react";

function SearchBar({handleSearchChange}) {

    return (
        <form class="d-flex">
            <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={e => handleSearchChange(e)}
            />
        </form>
    )
}

export default SearchBar;