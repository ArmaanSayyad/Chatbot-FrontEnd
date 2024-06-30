import React, { useRef, useEffect } from 'react';
import '../App.css';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolios from '../components/Portfolios';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

function Home({ scrollToTestimonials }) {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    if (scrollToTestimonials && testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToTestimonials]);

  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <div ref={testimonialsRef}>
      <Footer />
      </div>
    </div>
  );
}

export default Home;
