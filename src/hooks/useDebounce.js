import {useState} from "react";

const useDebounce = (delay) => {
    let [debounceRef, setDebounceRef] = useState();

    const debounce = (value, callBack) => {
        if (debounceRef) {
            clearTimeout(debounceRef);
        }
        const timeout = setTimeout(() => {
            if (callBack)
                callBack(value);
        }, delay);
        setDebounceRef(timeout);
    }

    return {
        debounce
    }
}

export default useDebounce;