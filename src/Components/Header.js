import React from "react";
import SearchBar from "./SearchBar"

function Header() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <h1 class="navbar-brand mb-0">Employee Directory</h1>
          <SearchBar />
      </div>
    </nav>
  );
}

export default Header;
