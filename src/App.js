import React from 'react';
import Footer from './components/Footer/'
import Header from './components/Header/'
import Banner from './components/Banner/'
import Categories from './components/Categories/'
import Brands from './components/Brands/'
import TrendingProducts from './components/TrendingProducts/'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <Brands />
      <TrendingProducts />
      <Footer />
    </div>
    );
}

export default App;
