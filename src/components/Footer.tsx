
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-salon-deep-pink mb-4">Красота и Блясък</h3>
            <p className="text-gray-600 mb-4">
              Вашият съвършен салон за красота с професионални услуги на достъпни цени.
            </p>
            <p className="text-gray-600">
              ул. Витоша 25<br />
              София, 1000<br />
              България
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Работно време</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Понеделник - Петък: 9:00 - 20:00</li>
              <li>Събота: 10:00 - 18:00</li>
              <li>Неделя: Затворено</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Контакти</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Телефон: +359 2 123 4567</li>
              <li>Email: info@krasota-i-blyasak.bg</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Следвайте ни</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-salon-deep-pink hover:text-pink-600">
                  Facebook
                </a>
                <a href="#" className="text-salon-deep-pink hover:text-pink-600">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center md:space-x-6 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-salon-deep-pink mb-2 md:mb-0">Начало</Link>
            <Link to="/services" className="hover:text-salon-deep-pink mb-2 md:mb-0">Услуги</Link>
            <Link to="/booking" className="hover:text-salon-deep-pink mb-2 md:mb-0">Резервация</Link>
            <Link to="/contact" className="hover:text-salon-deep-pink">Контакти</Link>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Красота и Блясък. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
