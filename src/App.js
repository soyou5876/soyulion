import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Section/Header';
import Homepage from './components/Main section/Homepage';
import BlogPage from './components/Main section/BlogPage';
import MenuPage from './components/Main section/Menu'; 
import { useLocation } from 'react-router-dom';
import Apparel from './components/Main section/Apparel'
import Checkout from './components/Main section/Checkout'
import Search from './components/Main section/Search'
import Contact from './components/Main section/Contact'

const Layout = () => {
  const location = useLocation();
  const hideHeaderRoutes = ['/menu', '/search']; 
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />} 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/menu" element={<MenuPage />} />
         <Route path="/apparel" element={<Apparel />} />
         <Route path="/checkout" element={<Checkout />} /> 
         <Route path="/search" element={<Search />} /> 
         <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
