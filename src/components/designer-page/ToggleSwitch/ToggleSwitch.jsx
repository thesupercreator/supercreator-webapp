import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleButton = ({onChange,checked}) => {
  const [isToggled, setToggle] = useState(checked);
    console.log(checked)
  const handleToggle = () => {
    setToggle(!isToggled);
    onChange(!isToggled)
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <span className="slider" />
    </label>
  );
};

export default ToggleButton;
