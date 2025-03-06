import React, {createContext, useState, useEffect} from "react";

export const newsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [noticias, setNoticias] = useState([]);


  // funcion de obtención de datos
  const fetchNoticias = async () => {
    try {
      const response = await fetch('/noticias.json');
      const data = await response.json();
      console.log(data);
      setNoticias(data);
    } catch (error) {
      console.error('Error al cargar las noticias:', error)
    }
  }

  useEffect(() => {
    fetchNoticias();
  }, []);

  return(
    <newsContext.Provider value={noticias}>
        {children}
    </newsContext.Provider>
  )
}