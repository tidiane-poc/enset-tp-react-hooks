import React, { useContext } from 'react';
import {LanguageContext, ThemeContext} from '../App';
import useProductSearch from '../hooks/useProductSearch';

const ProductList = ({query}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const btnClassName = isDarkTheme ? 'bg-dark text-light border border-light' : 'bg-light text-dark border border-dark';

  // TODO: Exercice 2.1 - Utiliser le LanguageContext pour les traductions

  const {
    products, 
    loading, 
    error,
      currentPage,
      totalPages,
    nextPage,
      previousPage,
      onRefresh
  } = useProductSearch(query);



  if (loading) return (
    <div className="text-center my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="alert alert-danger" role="alert">
      Erreur: {error}
    </div>
  );
  
  return (
      <div>
          <div className="d-flex justify-content-end">
              <button
                  onClick={() => onRefresh()}
                  className={`py-2 w-25 rounded ${
                      isDarkTheme
                          ? 'bg-dark text-light border border-light'
                          : 'bg-light text-dark border border-dark'
                  }`}
              >
                  Recharger
              </button>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-3">
              {products.map(product => (
                  <div key={product.id} className="col">
                      <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
                          {product.thumbnail && (<img src={product.thumbnail}
                          className="card-img-top"
                          alt={product.title}
                          style={{height: '200px', objectFit: 'cover'}}
                      />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <strong>Prix: </strong>
                      {product.price}€
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className={`page-link ${btnClassName}`} onClick={previousPage}>
                Précédent
              </button>
            </li>
            <li className="page-item">
            <span className={`page-link ${btnClassName}`}>
              Page {(currentPage + 1)} sur {totalPages}
            </span>
            </li>
            <li className="page-item">
              <button className={`page-link ${btnClassName}`} onClick={nextPage}>
                Suivant
              </button>
            </li>
          </ul>
        </nav>

      </div>
  );
};

export default ProductList;