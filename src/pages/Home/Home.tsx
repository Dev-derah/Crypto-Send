import React from 'react'
import Navbar from '../../components/Home/Navbar'
import HeroSection from '../../components/Home/HeroSection'
import FAQ from '../../components/Home/FAQ'


const Home= () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden scroll-smooth">
      <section className="min-h-screen bg-black">
        <Navbar />
        <HeroSection />
      </section>
      {/* <Services />

      <Newsletters />
      <Modal /> */}
      <FAQ />
      {/* {isMobile ? <MobileFooter /> : <Footer />} */}
    </div>
  );
}

export default Home