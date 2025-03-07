import React, {createContext, useState, useEffect} from "react";

export const newsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [noticias, setNoticias] = useState([]);
    const [categorias, setCategorias] = useState([]);


  // funcion de obtención de datos
  const fetchNoticias = async () => {
    try {
      const response = await fetch('/noticias.json');
      const data = await response.json();
      setNoticias(data);
    } catch (error) {
      console.error('Error al cargar las noticias:', error)
    }
  }

  useEffect(() => {
    fetchNoticias();
  }, []);

  // crear lista categorias
  useEffect(()=>{
    let newCategorias = noticias.map( noticia => noticia.categoria);
    newCategorias = Array.from(new Set(newCategorias));
    setCategorias(newCategorias);

  }, [noticias])
  

  return(
    <newsContext.Provider value={{noticias, categorias}}>
        {children}
    </newsContext.Provider>
  )
}