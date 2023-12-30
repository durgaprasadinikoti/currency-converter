// src/components/SelectBox.js
"use client";
import React, { useState } from "react";
import styles from "./SelectBox.module.css";
import { useEffect } from "react";

const CurrencySelectBox = ({ data, onSelect }) => {
  console.log(data);
  const [selectedOption, setSelectedOption] = useState("");
  const [OptionsData, setOptionsData] = useState(data || []);

  useEffect( () => {
    if(data && data.length > 0) {
        setOptionsData(data);
        setSelectedOption(data[0])
    }
  }, [data])

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div className={styles["container"]}>
      <div className="flex items-center">
        {OptionsData && OptionsData?.length === 0 && <h2>Loading ...</h2>}
        {
          OptionsData?.length > 0 &&   <div className="relative">
          <select
            className="appearance-none bg-gray-800 border p-2 rounded-md text-white leading-tight focus:outline-none focus:shadow-outline w-280 currencySelectWidth"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {}

            {
              OptionsData.map( (optionItem, index) => <option key={index} value={optionItem}>{optionItem}</option> )
            }
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="fill-current h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 0h20v20H0z" fill="none" />
              <path d="M10 3L4 9h12L10 3zm0 14l6-6H4l6 6z" />
            </svg>
          </div>
        </div>
        }

        
     
      </div>
    </div>
  );
};

export default CurrencySelectBox;
