
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-salon-cream shadow-sm py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold text-salon-black">
            Isabella Beauty
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-salon-black hover:text-salon-gold transition-colors">
            Начало
          </Link>
          <Link to="/services" className="text-salon-black hover:text-salon-gold transition-colors">
            Услуги
          </Link>
          <Link to="/booking" className="text-salon-black hover:text-salon-gold transition-colors">
            Резервация
          </Link>
          <Link to="/contact" className="text-salon-black hover:text-salon-gold transition-colors">
            Контакти
          </Link>
          <Button asChild variant="default" className="bg-salon-gold hover:bg-salon-deep-gold text-salon-black">
            <Link to="/booking">Запази час</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-salon-cream pt-20 px-4 animate-fade-in">
          <div className="flex flex-col space-y-6 items-center">
            <Link 
              to="/" 
              className="text-xl text-salon-black hover:text-salon-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Начало
            </Link>
            <Link 
              to="/services" 
              className="text-xl text-salon-black hover:text-salon-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              to="/booking" 
              className="text-xl text-salon-black hover:text-salon-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Резервация
            </Link>
            <Link 
              to="/contact" 
              className="text-xl text-salon-black hover:text-salon-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакти
            </Link>
            <Button 
              asChild 
              variant="default" 
              className="bg-salon-gold hover:bg-salon-deep-gold text-salon-black w-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/booking">Запази час</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
