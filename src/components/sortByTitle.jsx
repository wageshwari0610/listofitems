import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SortByTitle(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Sort By : </em>
          </MenuItem>
          <MenuItem value="title" onClick={() => props.onSort(age)}>
            Title
          </MenuItem>
          <MenuItem value="post" onClick={() => props.onSort(age)}>
            Post
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
