import React, { useEffect, useState } from "react";

export default function CustomRadioInput(props) {
  const [selectedoption, setSelectedOption] = useState("");
  const { name, value } = props;
  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }
  return (
    <div className='flex flex-row gap-3'>
      <input
        type='radio'
        value={value}
        name={name}
        defaultChecked
        onChange={(e) => handleOptionChange(e)}
      />
      {props.value}
    </div>
  );
}
