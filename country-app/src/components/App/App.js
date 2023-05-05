// In the app we will display the navigation bar, the search bar, the dropdown menu, and the country cards.

import React from "react";
import "./App.css";
import NavBar from "../NavBar/navBar";
import CountriesList from "../CountriesList/countriesList";
import SearchBar from "../SearchBar/searchBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <CountriesList />
    </div>
  );
}

export default App;
