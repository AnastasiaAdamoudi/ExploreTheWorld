import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function FilterDropDown(props) {

  return (
    <Box
      id="filter-dropdown-menu"
      bgcolor={"#FCF7F1"}
      sx={{
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        id="filter-dropdown-menu-title"
        variant="h1"
        component="div"
        sx={{
          flexGrow: 0,
          fontSize: "3rem",
          color: "#004777",
          fontWeight: "800",
          letterSpacing: "0.1em",
        }}
      >
        Continents
      </Typography>
      <FormControl sx={{ mt: 2, width: 0.4 }}>

        <InputLabel id="filter-menu">Select Destination</InputLabel>
        <Select
          sx={{
            borderColor: "red",
            backgroundColor: "white",
          }}
          labelId="filter-menu"
          id="filter-menu"

          value={props.value}
          label="Select Topic"
          aria-label="Click to expand the dropdown menu to select destination"


          onChange={props.onChange}
        >
          <MenuItem value={"All continents"} id="all-continents" aria-label="Select all continents">All continents</MenuItem>
          <MenuItem value={"Africa"} id="Africa-choice" aria-label="Select Africa">Africa</MenuItem>
          <MenuItem value={"Antarctica"} id="Antarctica-choice" aria-label="Select Antarctica">Antarctica</MenuItem>
          <MenuItem value={"Asia"} id="Asia-choice" aria-label="Select Asia">Asia</MenuItem>
          <MenuItem value={"Europe"} id="Europe-choice" aria-label="Select Europe">Europe</MenuItem>
          <MenuItem value={"North America"} id="North America-choice" aria-label="Select North America">North America</MenuItem>
          <MenuItem value={"Oceania"} id="Oceania-choice" aria-label="Select Oceania">Oceania</MenuItem>
          <MenuItem value={"South America"} id="South America-choice" aria-label="Select South America">South America</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterDropDown;
