import * as React from "react";

import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";

const RadioField = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel className="text-gray-400 poppins-semibold text-base">Sort By</FormLabel>
      <RadioGroup value={value} onChange={handleChange}>
        <FormControlLabel
          value="Most popular"
          control={<Radio />}
          label="Most popular"
        />
        <FormControlLabel
          value="Price (High to Low)"
          control={<Radio />}
          label="Price (High to Low)"
        />
        <FormControlLabel
          value="Price (Low to High)"
          control={<Radio />}
          label="Price (Low to High)"
        />
        <FormControlLabel
          value="New Arrivals"
          control={<Radio />}
          label="New Arrivals"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioField;
