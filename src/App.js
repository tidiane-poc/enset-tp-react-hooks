import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from "./components/LanguageSelector";

// TODO: Exercice 2.1 - Créer le LanguageContext

export const ThemeContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [lang, setLang] = useState('fr');
  const [query  , setQuery] = useState('');
  // TODO: Exercice 2.2 - Ajouter l'état pour la langue

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {/* TODO: Exercice 2.1 - Wrapper avec LanguageContext.Provider */}
      <LanguageContext.Provider value={{ lang, setLang }}>
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <header className="my-4">
          <h1 className="text-center">Catalogue de Produits</h1>
          <div className="d-flex justify-content-end gap-2">
            <ThemeToggle />
            <LanguageSelector/>
            {/* TODO: Exercice 2.2 - Ajouter le sélecteur de langue */}
          </div>
        </header>
        <main>
          <ProductSearch onSearch={setQuery} />
          <ProductList query={query}/>
        </main>
      </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App
