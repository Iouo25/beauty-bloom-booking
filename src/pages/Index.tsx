
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Scissors, Calendar, User } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Нашите Услуги</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Предлагаме висококачествени услуги за вашата красота и комфорт в Isabella Beauty
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Лазерна Епилация"
                description="Трайно и безболезнено премахване на нежелано окосмяване с най-модерните технологии."
                icon={<Calendar size={48} />}
                link="/services#laser"
                imageUrl="/laser-removal.jpg"
              />
              <ServiceCard
                title="Маникюр"
                description="Професионална грижа за вашите нокти - класически, гел и арт маникюр."
                icon={<User size={48} />}
                link="/services#manicure"
                imageUrl="/manicure.jpg"
              />
              <ServiceCard
                title="Фризьорски Услуги"
                description="Подстригване, боядисване, прически и третиране за всеки тип коса."
                icon={<Scissors size={48} />}
                link="/services#hair"
                imageUrl="/hair-styling.jpg"
              />
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-salon-deep-pink text-salon-deep-pink hover:bg-salon-pink">
                <Link to="/services">Вижте всички услуги</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Нашите Работи</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Разгледайте нашето портфолио от успешни трансформации
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img src="/work-1.jpg" alt="Маникюр" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/work-2.jpg" alt="Прическа" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/work-3.jpg" alt="Козметична процедура" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/work-4.jpg" alt="Лазерна епилация" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Защо да изберете нас</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ние се отличаваме с професионализъм, качество и внимание към детайла
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="bg-salon-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-salon-deep-pink text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Професионален екип</h3>
                <p className="text-gray-600">Работим само с квалифицирани и сертифицирани специалисти</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-salon-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-salon-deep-pink text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Модерно оборудване</h3>
                <p className="text-gray-600">Използваме най-съвременните технологии и продукти</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-salon-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-salon-deep-pink text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Хигиена и стерилност</h3>
                <p className="text-gray-600">Спазваме най-високи стандарти за хигиена и безопасност</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-salon-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-salon-deep-pink text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Удобно местоположение</h3>
                <p className="text-gray-600">Намираме се в центъра на града с лесен достъп</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-salon-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Какво казват клиентите</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Вижте мненията на нашите доволни клиенти
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="bg-salon-pink rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-salon-deep-pink font-bold">МИ</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-800">Мария Иванова</h4>
                    <p className="text-gray-500 text-sm">Клиент от 2 години</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Най-добрият салон, в който съм била! Професионално отношение, перфектни резултати и приятна атмосфера."
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="bg-salon-pink rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-salon-deep-pink font-bold">НП</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-800">Николай Петров</h4>
                    <p className="text-gray-500 text-sm">Клиент от 6 месеца</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Страхотен екип и отлично изпълнение! Подстригването ми е точно каквото исках, а резервацията онлайн беше много лесна."
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="bg-salon-pink rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-salon-deep-pink font-bold">ЕГ</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-800">Елена Георгиева</h4>
                    <p className="text-gray-500 text-sm">Клиент от 1 година</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Лазерната епилация даде невероятни резултати! Процедурата е почти безболезнена и персоналът е изключително внимателен."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-salon-deep-pink text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готови ли сте да блеснете?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Резервирайте вашия час сега и се отдайте на професионална грижа за красота
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

export default Index;
