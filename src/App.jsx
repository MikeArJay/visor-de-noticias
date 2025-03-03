import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { NewsList } from './NewsList';
import { NavigationBar } from './NavigationBar';
import { NewsDetails } from './NewsDetails';





function App() {
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

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<NewsList noticias={noticias} />}/>
        <Route path='/news/:id' element={<NewsDetails noticias={noticias} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
