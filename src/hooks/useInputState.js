import { useState } from "react";

// This is a 
export default initialVal => {
  const [value, setValue] = useState(initialVal);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = e => {
    setValue("");
  }
  return [ value, handleChange, reset ];
};
