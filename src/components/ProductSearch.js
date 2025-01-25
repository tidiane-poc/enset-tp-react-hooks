import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import useDebounce from "../hooks/useDebounce";

const ProductSearch = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);
  const {debounce}  = useDebounce(100);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext


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
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;