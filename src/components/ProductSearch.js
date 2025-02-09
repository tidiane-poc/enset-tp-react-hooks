import React, { useState, useContext } from 'react';
import useDebounce from "../hooks/useDebounce";
import {ThemeContext} from "../context";
import useTranslate from "../hooks/useTranslate";

const ProductSearch = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);
  const {debounce}  = useDebounce(100);
  const {translate} = useTranslate();


    const onInputChange = (value) => {
        setSearchTerm(value);
        if (onSearch) {
            onSearch(value);
        }
    }

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => debounce(e.target.value, (value) => onInputChange(value))}
        placeholder={translate("SEARCH_PLACEHOLDER")}
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;