// Display all countries in a grid with a card for each country
// Fetch the country data from the API
// Information to display:
// Country flag
// Country name
// Country population
// Country region
// Country capital
// Map through the data and display the information in the card
// How do we map through the data?
// Initialise a state variable to store the data from the API
// Use the useEffect hook to fetch the data from the API

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

export default function CountriesCard() {
  const [countriesData, setCountriesData] = useState([]); // This is the state variable that will store the data from the API

  useEffect(() => {
    async function getCountries() {
      const response = await fetch("https://restcountries.com/v3.1/all"); // This is the API call to get the data of all countries
      const countriesData = await response.json();
      console.log(countriesData);
      setCountriesData(countriesData); // This is the function that will update the state variable
    }
    getCountries(); // This is the function call
  }, []); // This is the dependency array that will trigger the useEffect hook

  return (
    <Grid
      justifyContent="center"
      className="grid-container"
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            {countriesData.map((country) => {
              return (
                <Item key={country.cca3}>
                  <div class="grid-item">
                    <CardMedia
                      component="img"
                      height="140"
                      image={country.flags.png}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {country.name.common}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Population: {country.population}
                        Region: {country.region}
                        Capital: {country.capital}
                      </Typography>
                    </CardContent>
                  </div>
                </Item>
              );
            })}
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
