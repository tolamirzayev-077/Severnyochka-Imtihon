import React, { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import RootLayout from './layout/RootLayout'
import Izbrozeniya from './pages/Izbrazenaya'
import Katalog from './pages/Katalog'
import Home from './pages/Home'
import Vakansi from './pages/Vakansi';
import About from './pages/About';
import Korzina from './pages/Korzina';
import Aksiya from './pages/PageAcksiya';
import Novinki from './pages/Novinki';
import Pokupki from './pages/Pokupki';
import Kontakt from './pages/Kontakt';
import { acsiyadata } from './store/data';
import Carddata from './components/Carddata';
import Cdetail from './pages/Cdetail';


const App = () => {

  const [cardLike, setCardLike] = useState([])
  const [like, setLike] = useState(false)


  const addLike = (i) => {
    const found = cardLike.find((e) => e.id === i);

    const productToAdd = acsiyadata.find((e) => e.id === i);
    setCardLike([...cardLike, { ...productToAdd, miqdor: 1 }]);


  };

  const removeLike = (i) => {
    const updatedShop = cardLike.filter((e) => e.id !== i);
    setCardLike(updatedShop);

  };

  const qoshish = (e) => {
    setLike(!like)
    if (!like) {
      addLike(e)
    }
    else {
      removeLike(e)
    }
  }
 console.log(cardLike.le);
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout cardLike={cardLike} />}>
        <Route index element={<Home qoshish={qoshish} like={like} />} />
        <Route path='izbrozenoe' element={<Izbrozeniya />} />
        <Route path='katalog' element={<Katalog />} />
        <Route path='vakansi' element={<Vakansi />} />
        <Route path='about' element={<About />} />
        <Route path='korzina' element={<Korzina />} />
        <Route path='aksiya' element={<Aksiya />} />
        <Route path='novinki' element={<Novinki />} />
        <Route path='pokupki' element={<Pokupki />} />
        <Route path='kontakt' element={<Kontakt />} />
        <Route path='carddata/:id' element={<Carddata />} />
        <Route path='cdetail/:id' element={<Cdetail />} />
      </Route>
    )
  )


  return (
    <div className='font-Rubik'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App