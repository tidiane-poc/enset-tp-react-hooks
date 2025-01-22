const useLocalStorage = () => {

    const addItem = (key, item) => {
      localStorage.setItem(key, JSON.stringify(item))
    }

    const getItemByKey = (key) => {
        return JSON.parse(localStorage.getItem(key))
    }

    const removeItemByKey = (key) => {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key)
      }
    }

    const deleteAll = () => {
      localStorage.clear()
    }

    return {
        addItem,
        getItemByKey,
        removeItemByKey,
        deleteAll
      }
}

export default useLocalStorage;