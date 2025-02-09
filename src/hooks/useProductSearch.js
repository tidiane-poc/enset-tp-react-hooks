import {useState, useEffect} from 'react';

// TODO: Exercice 3.1 - Créer le hook useDebounce
// TODO: Exercice 3.2 - Créer le hook useLocalStorage

const useProductSearch = (query) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, _] = useState(6);

  useEffect(() => {
    const querySearch = query ? `/search?q=${query}&skip=${0}&limit=${limit}` : `?skip=${0}&limit=${limit}`;
    fetchProducts(querySearch);
  }, [query]);

  useEffect(() => {
    const querySearch = query ? `/search?q=${query}&skip=${currentPage}&limit=${limit}` : `?skip=${currentPage}&limit=${limit}`;
    fetchProducts(querySearch);
  }, [currentPage]);


  const fetchProducts = async (querySearch) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.daaif.net/products${querySearch}`);
      if (!response.ok) throw new Error('Erreur réseau');
      const data = await response.json();
      setProducts(data.products);
      setCurrentPage(data.skip);
      setTotalPages(Math.ceil(data.total / limit));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  // TODO: Exercice 4.1 - Ajouter la fonction de rechargement
  // TODO: Exercice 4.2 - Ajouter les fonctions pour la pagination

  const nextPage = () => {
    if ((currentPage + 1) < totalPages)
      setCurrentPage(currentPage + 1);
  }
  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }else {
      setCurrentPage(0)
    }
  }
  const  onRefresh = () => {
    fetchProducts(`?skip=${currentPage}&limit=${limit}`);

  }
  return { 
    products, 
    loading, 
    error,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    onRefresh
    // TODO: Exercice 4.1 - Retourner la fonction de rechargement
    // TODO: Exercice 4.2 - Retourner les fonctions et états de pagination
  };
};

export default useProductSearch;