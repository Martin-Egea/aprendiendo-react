import { useEffect, useRef, useState } from "react";


export function useSearch() {
    const [search, updateSearch] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);
  
    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = search === "";
        return;
      }
  
      if (search === "") {
        setError("no se puede hacer una busqueda vacia");
        return;
      }
  
      if (search.match(/^[0-9]+$/)) {
        setError("la busqueda no puede ser un numero");
        return;
      }
  
      if (search.length < 3) {
        setError("la busqueda debe ser mayor a 3 caracteres");
        return;
      }
  
      setError(null);
    }, [search]);
  
    return { search, updateSearch, error };
  }