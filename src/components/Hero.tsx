import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <div className="relative">
      <div style={{
      backgroundImage: 'url("/beauty-studio-bg.jpg")'
    }} className="py-20 md:py-32 bg-cover bg-center bg-gray-950">
        <div className="container mx-auto px-4 flex flex-col items-center text-center bg-white/60 py-12 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="text-gray-950">Isabella Beauty</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mb-10">
            Професионални услуги за лазерна епилация, маникюр и фризьорство в сърцето на София
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-salon-deep-pink hover:bg-gray-800 text-white px-8">
              <Link to="/booking">Запази час</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-salon-gold text-salon-gold hover:bg-salon-pink">
              <Link to="/services">Разгледай услугите</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 -mt-12 relative z-10">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Резервирайте вашия час сега</h2>
            <p className="text-gray-600">Бързо и лесно онлайн резервиране</p>
          </div>
          <Button asChild size="lg" className="bg-salon-deep-pink hover:bg-gray-800 text-white px-8">
            <Link to="/booking">Запази час</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default Hero;