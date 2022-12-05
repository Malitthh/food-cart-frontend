// import { useState,useEffect } from 'react';
// import { useSelector } from "react-redux";

import HeaderBar from 'src/components/HeaderBar';
import PageContain from 'src/components/PageContain';
import MainSlide from 'src/components/MainSlide';
import MainContent from 'src/components/MainContent';
import Banners from 'src/components/Banners';
import ProductTabs from 'src/components/ProductTabs';
import BannerPromotion from 'src/components/BannerPromotion';
import Products from 'src/components/Products';
import Brands from 'src/components/Brands';
import Footer from 'src/components/Footer';
import FooterForMobile from 'src/components/FooterForMobile';
import QuickViewPopup from 'src/components/QuickViewPopup';
import ScollUpButton from 'src/components/ScrollUpButton';
import CarouselBar from 'src/components/CarouselBar';

const Home = () => {

  return (
    <div>
      <HeaderBar />
      <PageContain>
      <MainContent>
      <CarouselBar />
      {/* <MainSlide/> */}
      <Banners />
      <ProductTabs />
      {/* <Brands/> */}
      <BannerPromotion />
      {/* <Products/> */}
      </MainContent>
      </PageContain>
      <Footer />
      <FooterForMobile />
      <QuickViewPopup />
      <ScollUpButton />
    </div>
  )
}

export default Home;