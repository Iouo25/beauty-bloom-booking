
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Scissors, Calendar, User } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Header */}
        <section className="py-20 bg-salon-pink">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Услуги в Isabella Beauty
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Открийте пълната гама от професионални услуги, които предлагаме за вашата красота и комфорт
            </p>
          </div>
        </section>

        {/* Laser Hair Removal */}
        <section id="laser" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <div className="bg-salon-pink p-1 rounded-lg">
                  <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
                    <img src="/laser-service.jpg" alt="Лазерна епилация" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Лазерна Епилация</h2>
                <p className="text-gray-600 mb-6">
                  Нашата лазерна епилация предлага трайни резултати за премахване на нежелано окосмяване. Използваме най-съвременни технологии, които са подходящи за всички типове кожа.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Безопасна и ефективна процедура</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Подходяща за различни части на тялото</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Индивидуален подход според типа кожа</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Трайни резултати след пълен курс процедури</span>
                  </li>
                </ul>
                <div className="mb-8 p-4 bg-salon-pink/20 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Специалист:</h4>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img src="/specialist-elena.jpg" alt="Елена Димитрова" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">Елена Димитрова</p>
                      <p className="text-sm text-gray-600">Сертифициран специалист по лазерна епилация с 8 години опит</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-salon-deep-pink hover:bg-pink-500 text-white">
                  <Link to="/booking">Запази час сега</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Manicure */}
        <section id="manicure" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
                <div className="bg-salon-deep-pink p-1 rounded-lg">
                  <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
                    <img src="/manicure-service.jpg" alt="Маникюр" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Маникюр</h2>
                <p className="text-gray-600 mb-6">
                  Нашите услуги за маникюр включват класически, гел и арт маникюр с използване на висококачествени продукти. Създаваме невероятни дизайни според вашите предпочитания.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Класически и гел маникюр</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Укрепване и възстановяване на нокти</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Разнообразни дизайни и декорации</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Спа маникюр с хидратиращи продукти</span>
                  </li>
                </ul>
                <div className="mb-8 p-4 bg-salon-pink/20 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Специалист:</h4>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img src="/specialist-maria.jpg" alt="Мария Петрова" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">Мария Петрова</p>
                      <p className="text-sm text-gray-600">Нейл артист с над 10 години опит и множество награди за дизайн</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-salon-deep-pink hover:bg-pink-500 text-white">
                  <Link to="/booking">Запази час сега</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hair Styling */}
        <section id="hair" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <div className="bg-salon-gold p-1 rounded-lg">
                  <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
                    <img src="/hair-service.jpg" alt="Фризьорски услуги" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Фризьорски Услуги</h2>
                <p className="text-gray-600 mb-6">
                  Нашият екип от професионални фризьори предлага пълна гама от услуги за коса - от подстригване и боядисване до прически за специални поводи и терапии за всеки тип коса.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Подстригване за жени и мъже</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Професионално боядисване и кичури</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Трайно изправяне и къдрене</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Терапии за възстановяване на косата</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-salon-deep-pink mr-2">•</span>
                    <span>Прически за сватби и специални поводи</span>
                  </li>
                </ul>
                <div className="mb-8 p-4 bg-salon-pink/20 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Специалист:</h4>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img src="/specialist-ivan.jpg" alt="Иван Георгиев" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">Иван Георгиев</p>
                      <p className="text-sm text-gray-600">Стилист с международен опит и специализация в колористика</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-salon-deep-pink hover:bg-pink-500 text-white">
                  <Link to="/booking">Запази час сега</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Price List */}
        <section className="py-16 bg-salon-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ценова листа</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Нашите цени са конкурентни и предлагаме отлично съотношение между качество и цена
              </p>
            </div>

            {/* Laser Hair Removal Prices */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Лазерна Епилация</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Горна устна</span>
                  <span className="font-semibold">30 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Подмишници</span>
                  <span className="font-semibold">60 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Бикини зона</span>
                  <span className="font-semibold">80 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Цели крака</span>
                  <span className="font-semibold">180 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Цели ръце</span>
                  <span className="font-semibold">120 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Гръб</span>
                  <span className="font-semibold">150 лв.</span>
                </div>
              </div>
            </div>

            {/* Manicure Prices */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Маникюр</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Класически маникюр</span>
                  <span className="font-semibold">35 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Гел маникюр</span>
                  <span className="font-semibold">60 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Гел с френски маникюр</span>
                  <span className="font-semibold">70 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Спа маникюр</span>
                  <span className="font-semibold">50 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Смяна на цвят</span>
                  <span className="font-semibold">25 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Декорации (за нокът)</span>
                  <span className="font-semibold">5-15 лв.</span>
                </div>
              </div>
            </div>

            {/* Hair Styling Prices */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Фризьорски Услуги</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Дамско подстригване</span>
                  <span className="font-semibold">40-60 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Мъжко подстригване</span>
                  <span className="font-semibold">25-40 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Боядисване</span>
                  <span className="font-semibold">70-120 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Кичури</span>
                  <span className="font-semibold">100-180 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Официална прическа</span>
                  <span className="font-semibold">80-150 лв.</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-800">Терапия за коса</span>
                  <span className="font-semibold">50-90 лв.</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                * Цените могат да варират в зависимост от дължината и гъстотата на косата, както и от сложността на процедурата.
              </p>
              <Button asChild className="bg-salon-deep-pink hover:bg-pink-500 text-white">
                <Link to="/booking">Запази час сега</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-salon-deep-pink text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Готови да се трансформирате?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Запазете вашия час сега и се доверете на нашите професионалисти
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-salon-deep-pink">
              <Link to="/booking">Запази час</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
