import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckBoxesField = ({
  items,
}: {
  items: {
    title: string;
    options: Array<string>;
  }[];
}) => {
  const [checkedItems, setCheckedItems] = React.useState<{
    [key: string]: boolean;
  }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div>
      {items.map((item, idx) => (
        <FormControl key={idx} component="fieldset">
          <FormLabel className="text-gray-400 poppins-semibold text-base">
            {item?.title}
          </FormLabel>
          <FormGroup>
            {item.options.map((option, i) => (
              <FormControlLabel
                key={`${item.title}-${option}`}
                control={
                  <Checkbox
                    name={`${item.title}-${option}`}
                    checked={!!checkedItems[`${item.title}-${option}`]}
                    onChange={handleChange}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        </FormControl>
      ))}
    </div>
  );
};

export default CheckBoxesField;
