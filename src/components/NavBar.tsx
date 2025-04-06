
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="bg-white shadow-sm py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold text-gray-950">
            Isabella Beauty
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-salon-gold transition-colors">
            Начало
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-salon-gold transition-colors">
            Услуги
          </Link>
          <Link to="/booking" className="text-gray-700 hover:text-salon-gold transition-colors">
            Резервация
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-salon-gold transition-colors">
            Контакти
          </Link>
          <Button 
            asChild 
            variant="default" 
            className="bg-[#D946EF] hover:bg-[#BA2FBF] text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <Link to="/booking">Запази час</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden fixed inset-0 z-50 bg-white pt-20 px-4 animate-fade-in">
          <div className="flex flex-col space-y-6 items-center">
            <Link to="/" className="text-xl text-gray-800 hover:text-salon-gold" onClick={() => setIsMenuOpen(false)}>
              Начало
            </Link>
            <Link to="/services" className="text-xl text-gray-800 hover:text-salon-gold" onClick={() => setIsMenuOpen(false)}>
              Услуги
            </Link>
            <Link to="/booking" className="text-xl text-gray-800 hover:text-salon-gold" onClick={() => setIsMenuOpen(false)}>
              Резервация
            </Link>
            <Link to="/contact" className="text-xl text-gray-800 hover:text-salon-gold" onClick={() => setIsMenuOpen(false)}>
              Контакти
            </Link>
            <Button 
              asChild 
              variant="default" 
              className="bg-[#D946EF] hover:bg-[#BA2FBF] text-white w-full mt-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/booking">Запази час</Link>
            </Button>
          </div>
        </div>}
    </nav>;
};
export default NavBar;

