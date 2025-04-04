import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Scissors, Calendar, User } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';

const Services = () => {
  const [openHairOptions, setOpenHairOptions] = useState(false);
  const [openNailOptions, setOpenNailOptions] = useState(false);
  const [openLaserOptions, setOpenLaserOptions] = useState(false);
  const [openNailDecorationOptions, setOpenNailDecorationOptions] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Header */}
        <section className="py-20 bg-salon-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Услуги в Isabella Beauty
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Открийте пълната гама от професионални услуги, които предлагаме за вашата красота и комфорт
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-8 bg-salon-cream">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="text-center p-4">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <Scissors className="h-10 w-10 text-salon-gold" />
                </div>
                <p className="text-gray-800 font-medium">коса</p>
              </div>
              <div className="text-center p-4">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <svg className="h-10 w-10 text-salon-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 9l2 6l2-6"></path>
                    <rect x="8" y="4" width="8" height="5" rx="1"></rect>
                    <path d="M16 9v12"></path>
                    <path d="M8 9v12"></path>
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">нокти</p>
              </div>
              <div className="text-center p-4">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <svg className="h-10 w-10 text-salon-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                    <path d="M8 5.2C7 5.2 6 5.6 6 7c0 2.2 6 2 6 4s-6 1.8-6 4c0 1.4 1 1.8 2 1.8"></path>
                    <path d="M16 5.2c1 0 2 .4 2 1.8 0 2.2-6 2-6 4s6 1.8 6 4c0 1.4-1 1.8-2 1.8"></path>
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">епилация</p>
              </div>
              <div className="text-center p-4">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <svg className="h-10 w-10 text-salon-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3c0 0 0 12 6 12s6-12 6-12"></path>
                    <path d="M6 15c0 0 0 6 6 6s6-6 6-6"></path>
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">тяло</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Price Lists */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ценова листа</h2>
            
            {/* Hair Services */}
            <div className="mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-10 h-10 mr-3 bg-salon-cream rounded-full flex items-center justify-center">
                  <Scissors className="h-5 w-5 text-salon-gold" />
                </div>
                Фризьорски услуги
              </h3>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {/* Category 1: Подстригване и прически */}
                  <div className="hover:bg-gray-50">
                    <div className="flex justify-between items-center p-4">
                      <div className="flex items-center">
                        <span className="text-gray-800 font-medium">Подстригване и прически (6)</span>
                      </div>
                      <div className="text-salon-gold">от 8 лв.</div>
                    </div>
                  </div>
                  
                  {/* Category 2: Боядисване и кичури */}
                  <Collapsible
                    open={openHairOptions}
                    onOpenChange={setOpenHairOptions}
                    className="w-full"
                  >
                    <div className="hover:bg-gray-50">
                      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
                        <div className="flex items-center">
                          <span className="text-gray-800 font-medium">Боядисване и кичури (7)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-salon-gold mr-2">от 39 лв.</span>
                          {openHairOptions ? <ChevronUp className="h-4 w-4 text-salon-gold" /> : <ChevronDown className="h-4 w-4 text-salon-gold" />}
                        </div>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent>
                      <div className="bg-gray-50 p-4">
                        <div className="pl-4">
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Боядисване с боя Kadiffe</div>
                              <div className="text-gray-500 text-sm">на корени</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">59 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Боядисване с боя Kadiffe</div>
                              <div className="text-gray-500 text-sm">на къса коса</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">79 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Боядисване с боя Kadiffe</div>
                              <div className="text-gray-500 text-sm">на средно дълга коса</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">99 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3">
                            <div>
                              <div className="text-gray-800">Боядисване с боя Kadiffe</div>
                              <div className="text-gray-500 text-sm">на дълга коса (1 ч 20 мин)</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">129 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  {/* Category 3: Къдрене и изправяне */}
                  <div className="hover:bg-gray-50">
                    <div className="flex justify-between items-center p-4">
                      <div className="flex items-center">
                        <span className="text-gray-800 font-medium">Къдрене и изправяне (4)</span>
                      </div>
                      <div className="text-salon-gold">от 49 лв.</div>
                    </div>
                  </div>
                  
                  {/* Category 4: Екстеншъни */}
                  <div className="hover:bg-gray-50">
                    <div className="flex justify-between items-center p-4">
                      <div className="flex items-center">
                        <span className="text-gray-800 font-medium">Екстеншъни (5)</span>
                      </div>
                      <div className="text-salon-gold"></div>
                    </div>
                  </div>
                  
                  {/* Category 5: Терапии за коса */}
                  <div className="hover:bg-gray-50">
                    <div className="flex justify-between items-center p-4">
                      <div className="flex items-center">
                        <span className="text-gray-800 font-medium">Терапии за коса (9)</span>
                      </div>
                      <div className="text-salon-gold">от 15 лв.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Nails Services */}
            <div className="mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-10 h-10 mr-3 bg-salon-cream rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-salon-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 9l2 6l2-6"></path>
                    <rect x="8" y="4" width="8" height="5" rx="1"></rect>
                    <path d="M16 9v12"></path>
                    <path d="M8 9v12"></path>
                  </svg>
                </div>
                Маникюр
              </h3>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {/* Gel Polish (Гел лак) Dropdown */}
                  <Collapsible
                    open={openNailOptions}
                    onOpenChange={setOpenNailOptions}
                    className="w-full"
                  >
                    <div className="hover:bg-gray-50">
                      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
                        <div className="flex items-center">
                          <span className="text-gray-800 font-medium">Гел лак (6)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-salon-gold mr-2">от 7 лв.</span>
                          {openNailOptions ? <ChevronUp className="h-4 w-4 text-salon-gold" /> : <ChevronDown className="h-4 w-4 text-salon-gold" />}
                        </div>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent>
                      <div className="bg-gray-50 p-4">
                        <div className="pl-4">
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Маникюр с гел лак + сваляне на старо покритие</div>
                              <div className="text-gray-500 text-sm">1 ч 15 мин, включително dekartag</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">35 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Френски маникюр с гел лак</div>
                              <div className="text-gray-500 text-sm">1 ч 30 мин, включително dekartag</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">45 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Педикюр с гел лак + сваляне на старо покритие</div>
                              <div className="text-gray-500 text-sm">1 ч 30 мин, включително детайли</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">49 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">VIP СПА педикюр</div>
                              <div className="text-gray-500 text-sm">1 ч 30 мин, включително детайли</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">70 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3">
                            <div>
                              <div className="text-gray-800">Сваляне на гел лак</div>
                              <div className="text-gray-500 text-sm">30 мин</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">10 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  {/* Nail Decoration Dropdown */}
                  <Collapsible
                    open={openNailDecorationOptions}
                    onOpenChange={setOpenNailDecorationOptions}
                    className="w-full"
                  >
                    <div className="hover:bg-gray-50">
                      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
                        <div className="flex items-center">
                          <span className="text-gray-800 font-medium">Лепене на нокът</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-salon-gold mr-2">от 3 лв.</span>
                          {openNailDecorationOptions ? <ChevronUp className="h-4 w-4 text-salon-gold" /> : <ChevronDown className="h-4 w-4 text-salon-gold" />}
                        </div>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent>
                      <div className="bg-gray-50 p-4">
                        <div className="pl-4">
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">1 брой</div>
                              <div className="text-gray-500 text-sm">5 мин</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">3 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">2 броя</div>
                              <div className="text-gray-500 text-sm">10 мин</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">6 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3">
                            <div>
                              <div className="text-gray-800">3 броя</div>
                              <div className="text-gray-500 text-sm">15 мин</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">9 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
            
            {/* Laser Hair Removal Services */}
            <div className="mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-10 h-10 mr-3 bg-salon-cream rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-salon-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                    <path d="M8 5.2C7 5.2 6 5.6 6 7c0 2.2 6 2 6 4s-6 1.8-6 4c0 1.4 1 1.8 2 1.8"></path>
                    <path d="M16 5.2c1 0 2 .4 2 1.8 0 2.2-6 2-6 4s6 1.8 6 4c0 1.4-1 1.8-2 1.8"></path>
                  </svg>
                </div>
                Лазерна епилация
              </h3>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {/* Laser hair removal services with dropdown */}
                  <Collapsible
                    open={openLaserOptions}
                    onOpenChange={setOpenLaserOptions}
                    className="w-full"
                  >
                    <div className="hover:bg-gray-50">
                      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
                        <div className="flex items-center">
                          <span className="text-gray-800 font-medium">Лазерна епилация за жени</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-salon-gold mr-2">от 30 лв.</span>
                          {openLaserOptions ? <ChevronUp className="h-4 w-4 text-salon-gold" /> : <ChevronDown className="h-4 w-4 text-salon-gold" />}
                        </div>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent>
                      <div className="bg-gray-50 p-4">
                        <div className="pl-4">
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Горна устна</div>
                              <div className="text-gray-500 text-sm">15 мин</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">30 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Подмишници</div>
                              <div className="text-gray-500 text-sm">20 мин</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">60 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Бикини зона</div>
                              <div className="text-gray-500 text-sm">30 мин</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">80 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <div className="text-gray-800">Цели крака</div>
                              <div className="text-gray-500 text-sm">1 час</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">180 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-3">
                            <div>
                              <div className="text-gray-800">Цели ръце</div>
                              <div className="text-gray-500 text-sm">45 мин</div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-4">120 лв.</span>
                              <Button variant="outline" size="sm" className="bg-transparent border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-white">
                                избери
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-salon-black hover:bg-salon-gold text-white hover:text-black">
                <Link to="/booking">Запази час сега</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-salon-black text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Готови да се трансформирате?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Запазете вашия час сега и се доверете на нашите професионалисти
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-salon-gold hover:text-salon-black">
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
