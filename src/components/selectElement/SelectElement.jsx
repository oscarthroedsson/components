import { useState } from "react";

/* eslint-disable react/prop-types */
export default function SelectElement({ data = {}, onSelect }) {
  const [showDropdown, setShowDropDown] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    data.placeholder || "No Props"
  );
  const options = data.options || [
    {
      textContent: "No Values",
      value: 0,
    },
  ];

  return (
    <>
      {/* custom-select måstet ha custom width för MQ */}
      <div className="custom-select relative w-[300px] text-left">
        <button
          className="select-button bg-none border-2 border-[#161722]  px-4 py-2 w-full flex justify-between items-center rounded-md"
          role="combobox"
          aria-labelledby="select button"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="select-dropdown"
          onClick={() => {
            setShowDropDown((prevShowDropdow) => !prevShowDropdow);
          }}
        >
          <span className="selected-value" value={placeholder}>
            {placeholder}
          </span>
          <span
            className={`material-icons-outlined ${
              showDropdown ? "rotate-180" : ""
            } text-green-500`}
          >
            keyboard_arrow_down
          </span>
        </button>
        {showDropdown && (
          <ul
            className="select-dropdown absolute py-4 list-none w-full bg-[#1C1C27] text-white rounded-md mt-1"
            role="listbox"
            id="select-dropdown"
          >
            {options.map((option, index) => {
              return (
                <>
                  <li
                    className="s w-full px-4 py-2 rounded-md hover:bg-[#04BE68] hover:text-white"
                    key={index}
                    role="option"
                    value={option.value}
                    onClick={() => {
                      setPlaceholder(option.textContent);
                      setShowDropDown(false);
                      // Sends back the value
                      if (onSelect) {
                        onSelect(option.value);
                      }
                      console.log("value: ", option.value);
                    }}
                  >
                    {option.textContent}
                  </li>
                </>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
