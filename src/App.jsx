
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewsList } from './NewsList';
import { NavigationBar } from './NavigationBar';
import { NewsDetails } from './NewsDetails';
import { NewsProvider } from './NewsProvider';





function App() {


  return (
    <NewsProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<NewsList />} />
          <Route path='/news/:id' element={<NewsDetails />} />
          <Route path='/news/categorias/:categoria' element={<NewsDetails />} />
        </Routes>
      </BrowserRouter>
    </NewsProvider>
  )
}

export default App
