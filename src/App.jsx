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
import Pokupki from './pages/Pokupki';
import Kontakt from './pages/Kontakt';
import { acsiyadata, novinkidata } from './store/data';
import Carddata from './components/Carddata';
import Cdetail from './pages/Cdetail';
import Katalogresults from './components/Katalogresults';
import Carddatanovinki from './pages/Carddatanovinki';
import Cardranshedata from './pages/Cardranshedata';
import Vseaksi from './pages/Vseaksi';
import PageNotFound from './pages/PageNotFound';


const App = () => {

  const [cardLike, setCardLike] = useState([])
  const [like, setLike] = useState(false)

  const [korzina, setKorzina] = useState([])


  const addLike = (i) => {
    const found = cardLike.find((e) => e.id === i);
    if (!found) {
      const productToAdd = acsiyadata.find((e) => e.id === i);
      setCardLike([...cardLike, {...productToAdd}]);
    }

  };

  const addKorzina = (i) => {
    const found = korzina.find((e) => e.id === i);
    if (!found) {
      const productToAdd = acsiyadata.find((e) => e.id === i);
      setKorzina([...korzina, { ...productToAdd }])
    }
    else (
      alert('Этот товар уже выбран')
    )

  };

  const removeLike = (i) => {
    const updatedShop = cardLike.filter((e) => e.id !== i);
    setCardLike(updatedShop);

  };

  // 2

  const addLike2 = (i) => {
    const found = cardLike.find((e) => e.id === i);
    if (!found) {
      const productToAdd = novinkidata.find((e) => e.id === i);
      setCardLike([...cardLike, { ...productToAdd }]);
    }

  };

  const addKorzina2= (i) => {
    const found = korzina.find((e) => e.id === i);
    if (!found) {
      const productToAdd = novinkidata.find((e) => e.id === i);
      setKorzina([...korzina, { ...productToAdd }])
    }
    else (
      alert('Этот товар уже выбран')
    )

  };

  const removeLike2 = (i) => {
    const updatedShop = cardLike.filter((e) => e.id !== i);
    setCardLike(updatedShop);

  };

  // 3

  const addLike3 = (i) => {
    const found = cardLike.find((e) => e.id === i);
    if (!found) {
      const productToAdd = acsiyadata.find((e) => e.id === i);
      setCardLike([...cardLike, { ...productToAdd }]);
    }

  };

  const addKorzina3 = (i) => {
    const found = korzina.find((e) => e.id === i);
    if (!found) {
      const productToAdd = acsiyadata.find((e) => e.id === i);
      setKorzina([...korzina, { ...productToAdd }])
    }
    else (
      alert('Этот товар уже выбран')
    )

  };

  const removeLike3 = (i) => {
    const updatedShop = cardLike.filter((e) => e.id !== i);
    setCardLike(updatedShop);

  };
  // add korzina 4

  const addKorzina4 = (i) => {
    const found = korzina.find((e) => e.id === i);
    if (!found) {
      const productToAdd = acsiyadata.find((e) => e.id === i);
      setKorzina([...korzina, { ...productToAdd }])
    }
    else (
      alert('Этот товар уже выбран')
    )

  };


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout cardLike={cardLike} korzina={korzina} />}>
        <Route index element={<Home addLike={addLike} addKorzina={addKorzina} addLike3={addLike3} addKorzina3={addKorzina3} addLike2={addLike2} addKorzina2={addKorzina2} cardLike={cardLike} removeLike={removeLike} removeLike3={removeLike3} removeLike2={removeLike2} />} />
        <Route path='izbrozenoe' element={<Izbrozeniya korzina={korzina} cardLike={cardLike} addKorzina4={addKorzina4} />} />
        <Route path='katalog' element={<Katalog />} />
        <Route path='vakansi' element={<Vakansi />} />
        <Route path='about' element={<About />} />
        <Route path='korzina' element={<Korzina korzina={korzina} setKorzina={setKorzina} />} />
        <Route path='pokupki' element={<Pokupki />} />
        <Route path='kontakt' element={<Kontakt />} />
        <Route path='carddata/:id' element={<Carddata />} />
        <Route path='cdetail/:id' element={<Cdetail />} />
        <Route path='novinkidata/:id' element={<Carddatanovinki />} />
        <Route path='katalogresults/:id' element={<Katalogresults />} />
        <Route path='ranshedata/:id' element={<Cardranshedata />} />
        <Route path='vseaksi' element={<Vseaksi />} />
        <Route path='*' element={<PageNotFound />} />
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