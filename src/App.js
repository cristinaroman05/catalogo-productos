import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';

import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';

const About = React.lazy(() => import("./components/About/About"));
const Faqs = React.lazy(() => import("./components/Faqs/Faqs"));
const MyAccount = React.lazy(() => import("./components/MyAccount/MyAccount"));
const Login = React.lazy(() => import("./components/Login/Login"));

export const AuthContext = React.createContext({ user: null });

function App() {
  const [authInfo, setAuthInfo] = React.useState({ user: null });

  return (
    <AuthContext.Provider value={authInfo}>
      <div className="app">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<React.Suspense fallback={<p>Cargando...</p>}> <About></About> </React.Suspense>}></Route>
            <Route path='/products' element={<React.Suspense fallback={<p>Cargando...</p>}> <Products></Products> </React.Suspense>}></Route>
            <Route path='/login' element={<React.Suspense fallback={<p>Cargando...</p>}><Login login={setAuthInfo}></Login></React.Suspense>}></Route>
            <Route path="/product-detail/:productId" element={<ProductDetail/>}></Route>
            <Route path='/my-account' element={<React.Suspense fallback={<p>Cargando...</p>}><MyAccount></MyAccount></React.Suspense>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>

  );
}

export default App;
