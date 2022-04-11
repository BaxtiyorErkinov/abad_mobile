import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer/';
import Header from './components/Header/';
import Banner from './components/Banner/';
import Categories from './components/Categories/';
import Brands from './components/Brands/';
import TrendingProducts from './components/TrendingProducts/';
import Carousel from './components/ProductsCarousel/';
import CarouselItem from './components/ProductsCarousel/CarouselItem';
import YouTube from './components/YouTube/'

function App() {
  const [bestSellersPage, setBestSellersPage] = useState(1);
  const [newArrivalsPage, setNewArrivalsPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);
  const [bestSellersData, setBestSellers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  async function getBestSellers(page) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: 4,
        _page: bestSellersPage,
      },
    });
    setBestSellers(res.data);
    const totalCount = res.headers['x-total-count'];
    setTotalPages(totalCount / 4);
  }

  useEffect(() => {
    getBestSellers();
  }, [bestSellersPage]);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <Brands />
      <TrendingProducts />
      <Carousel bestSellersPage={ bestSellersPage } setBestSellersPage={ setBestSellersPage } totalPages={ totalPages } title={ "Bestsellers" }>
        { bestSellersData.map((el) => (
            <CarouselItem item={ el } />
          )) }
      </Carousel>
      <YouTube />
      <Footer />
    </div>
    );
}

export default App;
