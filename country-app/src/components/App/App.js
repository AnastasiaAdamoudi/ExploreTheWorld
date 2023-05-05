// In the app we will display the navigation bar, the search bar, the dropdown menu, and the country cards.

import React from "react";
import "./App.css";
import NavBar from "../NavBar/navBar";
import CountriesList from "../CountriesList/countriesList";
import { useReducer } from "react";
// // import the country data from countriesList.js
// import { country } from "../CountriesList/countriesList";
// import FilterDropDown from "../FilterDropDown/filterDropDown";
// // import SearchBar from "../SearchBar/searchBar";

function App() {

//   const initialState = country;
// 	const [state, dispatch] = useReducer(reducer, initialState);

// 	function reducer(state, value) {

// 		console.log(value.target.value);
// 		switch (value.target.value) {
// 			case "Africa":
// 				return initialState.filter((item) => item.continents === "Africa");
// 			case "Antarctica":
// 				return initialState.filter((item) => item.continents === "Antarctica");
// 			case "Asia":
// 				return initialState.filter((item) => item.continents === "Asia");
// 			case "Europe":
// 				return initialState.filter((item) => item.continents === "Europe");
// 			case "North America":
// 				return initialState.filter((item) => item.continents === "North America");
// 			case "Oceania":
// 				return initialState.filter((item) => item.continents === "Oceania");
//       case "South America":
//         return initialState.filter((item) => item.continents === "South America");
//       case "all":
//         return initialState;
// 			default:
// 				return [];
// 		}
// 	}

  return (
    <div className="App">
      <NavBar />
      {/* <SearchBar /> */}
      {/* <FilterDropDown onChange={dispatch} /> */}
      <CountriesList />
    </div>
  );
}

export default App;
