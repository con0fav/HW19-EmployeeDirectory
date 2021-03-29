import React from "react";

function SearchBar({handleSearchChange}) {

    return (
        <form class="d-flex">
            <input
                className="form-control"
                type="search"
                placeholder="Search"
                onChange={e => handleSearchChange(e)}
            />
        </form>
    )
}

export default SearchBar;