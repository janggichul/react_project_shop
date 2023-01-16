import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/css/tailwind.css';
import './assets/css/style.css';

import { useRef } from 'react'
import Nav from './components/Nav'
import { ScrollToTop } from './helpers/helpers';
import Drawer from './components/Drawer';
import Error from './view/Error';
import Index from './view/Index';
import Products from './view/Products';
import Cart from './view/Cart';
import Fashion from './view/Fashion';
import Accessory from './view/Accessory';
import Digital from './view/Digital';
import Footer from './components/Footer';

function App(): JSX.Element {
  const $hamburger = useRef<HTMLInputElement>(null);
  const closeOverlay = () => {
    $hamburger?.current?.click();
  };

  return (
   <BrowserRouter>
   <ScrollToTop />
      <input type='checkbox' id='side-menu' className='drawer-toggle' ref={$hamburger} />
    <section className='drawer-content'>
      <Nav />
      <section className='main pt-16'>
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Index />} />
        <Route path='/product/:id' element={<Products /> }/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/fashion' element={<Fashion />}/>
        <Route path='/accessory' element={<Accessory />}/>
        <Route path='/digital' element={<Digital />}/>
      </Routes>
      </section>
        <Footer />
    </section>
    <Drawer closeOverlay={closeOverlay} />
   </BrowserRouter>
  )
}

export default App
