import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Filme from './pages/filme';
import Header from './components/Header';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

export default function RotasApp() {

  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/filme/:id' element={<Filme/>}/>
        <Route path='/favoritos' element={<Favoritos/>}/>
        
        <Route path='*' element={<Erro/>}/>
      </Routes>
    </BrowserRouter>
  )
}
