
import React, { useState } from 'react';
import { format } from 'date-fns';
import { bg } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const services = {
  laser: [
    { id: 'laser-1', name: 'Лазерна епилация - горна устна', duration: 15, price: 30 },
    { id: 'laser-2', name: 'Лазерна епилация - подмишници', duration: 20, price: 60 },
    { id: 'laser-3', name: 'Лазерна епилация - бикини зона', duration: 30, price: 80 },
    { id: 'laser-4', name: 'Лазерна епилация - цели крака', duration: 60, price: 180 },
    { id: 'laser-5', name: 'Лазерна епилация - цели ръце', duration: 45, price: 120 },
    { id: 'laser-6', name: 'Лазерна епилация - гръб', duration: 45, price: 150 },
  ],
  manicure: [
    { id: 'manicure-1', name: 'Класически маникюр', duration: 45, price: 35 },
    { id: 'manicure-2', name: 'Гел маникюр', duration: 60, price: 60 },
    { id: 'manicure-3', name: 'Гел с френски маникюр', duration: 75, price: 70 },
    { id: 'manicure-4', name: 'Спа маникюр', duration: 60, price: 50 },
    { id: 'manicure-5', name: 'Смяна на цвят', duration: 30, price: 25 },
  ],
  hair: [
    { id: 'hair-1', name: 'Дамско подстригване', duration: 45, price: 50 },
    { id: 'hair-2', name: 'Мъжко подстригване', duration: 30, price: 35 },
    { id: 'hair-3', name: 'Боядисване', duration: 90, price: 90 },
    { id: 'hair-4', name: 'Кичури', duration: 120, price: 140 },
    { id: 'hair-5', name: 'Официална прическа', duration: 90, price: 120 },
    { id: 'hair-6', name: 'Терапия за коса', duration: 60, price: 70 },
  ]
};

const timeSlots = [
  '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', 
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', 
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', 
  '18:00', '18:30', '19:00', '19:30'
];

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('laser');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  // State to determine which step of the booking process we're on
  const [bookingStep, setBookingStep] = useState(1);

  const handleServiceSelection = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTimeSlot(time);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation for the form
    if (!selectedService || !date || !selectedTimeSlot || !formData.name || !formData.phone) {
      toast({
        title: "Непълна информация",
        description: "Моля, попълнете всички задължителни полета.",
        variant: "destructive",
      });
      return;
    }
    
    // Find the selected service details
    const serviceCategory = selectedCategory as keyof typeof services;
    const serviceDetails = services[serviceCategory].find(service => service.id === selectedService);
    
    if (!serviceDetails) {
      toast({
        title: "Грешка",
        description: "Избраната услуга не беше намерена.",
        variant: "destructive",
      });
      return;
    }
    
    // Success message
    toast({
      title: "Резервацията е успешна!",
      description: `Вашият час за ${serviceDetails.name} на ${format(date, 'dd.MM.yyyy', { locale: bg })} в ${selectedTimeSlot} ч. е запазен. Ще получите потвърждение на имейла си.`,
    });
    
    // Reset form after successful submission
    setSelectedService(null);
    setDate(undefined);
    setSelectedTimeSlot(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      notes: '',
    });
    setBookingStep(1);
  };
  
  // Get the selected service details
  const getSelectedServiceDetails = () => {
    if (!selectedService) return null;
    const serviceCategory = selectedCategory as keyof typeof services;
    return services[serviceCategory].find(service => service.id === selectedService);
  };
  
  const serviceDetails = getSelectedServiceDetails();

  const goToNextStep = () => {
    if (bookingStep === 1 && !selectedService) {
      toast({
        title: "Изберете услуга",
        description: "Моля, изберете услуга, за да продължите.",
        variant: "destructive",
      });
      return;
    }
    
    if (bookingStep === 2 && (!date || !selectedTimeSlot)) {
      toast({
        title: "Изберете дата и час",
        description: "Моля, изберете дата и час за вашата резервация.",
        variant: "destructive",
      });
      return;
    }
    
    setBookingStep(bookingStep + 1);
  };
  
  const goToPreviousStep = () => {
    setBookingStep(bookingStep - 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              Направете резервация
            </h1>
            
            {/* Booking Progress */}
            <div className="mb-10">
              <div className="flex items-center justify-between">
                <div className={`flex-1 text-center ${bookingStep >= 1 ? 'text-salon-deep-pink' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full mb-2 ${bookingStep >= 1 ? 'bg-salon-deep-pink text-white' : 'bg-gray-200 text-gray-500'}`}>
                    1
                  </div>
                  <span className="text-sm">Избор на услуга</span>
                </div>
                <div className={`h-1 flex-1 ${bookingStep >= 2 ? 'bg-salon-deep-pink' : 'bg-gray-200'}`}></div>
                <div className={`flex-1 text-center ${bookingStep >= 2 ? 'text-salon-deep-pink' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full mb-2 ${bookingStep >= 2 ? 'bg-salon-deep-pink text-white' : 'bg-gray-200 text-gray-500'}`}>
                    2
                  </div>
                  <span className="text-sm">Дата и час</span>
                </div>
                <div className={`h-1 flex-1 ${bookingStep >= 3 ? 'bg-salon-deep-pink' : 'bg-gray-200'}`}></div>
                <div className={`flex-1 text-center ${bookingStep >= 3 ? 'text-salon-deep-pink' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full mb-2 ${bookingStep >= 3 ? 'bg-salon-deep-pink text-white' : 'bg-gray-200 text-gray-500'}`}>
                    3
                  </div>
                  <span className="text-sm">Вашите детайли</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              {/* Step 1: Service Selection */}
              {bookingStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Изберете услуга</h2>
                  
                  <Tabs defaultValue="laser" value={selectedCategory} onValueChange={setSelectedCategory}>
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="laser">Лазерна епилация</TabsTrigger>
                      <TabsTrigger value="manicure">Маникюр</TabsTrigger>
                      <TabsTrigger value="hair">Фризьорски услуги</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="laser">
                      <RadioGroup value={selectedService || ""} onValueChange={handleServiceSelection}>
                        {services.laser.map((service) => (
                          <div key={service.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-md mb-3 hover:border-salon-pink cursor-pointer" onClick={() => handleServiceSelection(service.id)}>
                            <div className="flex items-center">
                              <RadioGroupItem value={service.id} id={service.id} />
                              <Label htmlFor={service.id} className="ml-2 cursor-pointer">
                                {service.name}
                              </Label>
                            </div>
                            <div className="text-right">
                              <span className="block text-gray-500 text-sm">{service.duration} мин.</span>
                              <span className="font-semibold">{service.price} лв.</span>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </TabsContent>
                    
                    <TabsContent value="manicure">
                      <RadioGroup value={selectedService || ""} onValueChange={handleServiceSelection}>
                        {services.manicure.map((service) => (
                          <div key={service.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-md mb-3 hover:border-salon-pink cursor-pointer" onClick={() => handleServiceSelection(service.id)}>
                            <div className="flex items-center">
                              <RadioGroupItem value={service.id} id={service.id} />
                              <Label htmlFor={service.id} className="ml-2 cursor-pointer">
                                {service.name}
                              </Label>
                            </div>
                            <div className="text-right">
                              <span className="block text-gray-500 text-sm">{service.duration} мин.</span>
                              <span className="font-semibold">{service.price} лв.</span>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </TabsContent>
                    
                    <TabsContent value="hair">
                      <RadioGroup value={selectedService || ""} onValueChange={handleServiceSelection}>
                        {services.hair.map((service) => (
                          <div key={service.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-md mb-3 hover:border-salon-pink cursor-pointer" onClick={() => handleServiceSelection(service.id)}>
                            <div className="flex items-center">
                              <RadioGroupItem value={service.id} id={service.id} />
                              <Label htmlFor={service.id} className="ml-2 cursor-pointer">
                                {service.name}
                              </Label>
                            </div>
                            <div className="text-right">
                              <span className="block text-gray-500 text-sm">{service.duration} мин.</span>
                              <span className="font-semibold">{service.price} лв.</span>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-8 flex justify-end">
                    <Button onClick={goToNextStep} className="bg-salon-deep-pink hover:bg-pink-600 text-white">
                      Продължи
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Date and Time Selection */}
              {bookingStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Изберете дата и час</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Избрана услуга:</h3>
                    {serviceDetails && (
                      <div className="bg-salon-pink bg-opacity-30 p-4 rounded-md">
                        <p className="font-medium">{serviceDetails.name}</p>
                        <p className="text-sm text-gray-600">Продължителност: {serviceDetails.duration} мин. | Цена: {serviceDetails.price} лв.</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">Дата:</h3>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="p-3 pointer-events-auto border rounded-md"
                        locale={bg}
                        disabled={(date) => {
                          const day = date.getDay();
                          // Disable Sundays (0) and past dates
                          return day === 0 || date < new Date(new Date().setHours(0, 0, 0, 0));
                        }}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">Час:</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTimeSlot === time ? "default" : "outline"}
                            className={`${selectedTimeSlot === time ? 'bg-salon-deep-pink hover:bg-pink-600 text-white' : 'hover:bg-salon-pink hover:text-gray-800'}`}
                            onClick={() => handleTimeSelection(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button onClick={goToPreviousStep} variant="outline" className="border-salon-deep-pink text-salon-deep-pink hover:bg-salon-pink">
                      Назад
                    </Button>
                    <Button onClick={goToNextStep} className="bg-salon-deep-pink hover:bg-pink-600 text-white">
                      Продължи
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Personal Details */}
              {bookingStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Вашите детайли</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Резюме на резервацията:</h3>
                    {serviceDetails && date && selectedTimeSlot && (
                      <div className="bg-salon-pink bg-opacity-30 p-4 rounded-md">
                        <p className="font-medium">{serviceDetails.name}</p>
                        <p className="text-sm text-gray-600">Дата: {format(date, 'EEEE, d MMMM yyyy', { locale: bg })}</p>
                        <p className="text-sm text-gray-600">Час: {selectedTimeSlot}</p>
                        <p className="text-sm text-gray-600">Продължителност: {serviceDetails.duration} мин. | Цена: {serviceDetails.price} лв.</p>
                      </div>
                    )}
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Име и фамилия *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Имейл</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="notes">Допълнителни бележки</Label>
                        <Textarea 
                          id="notes" 
                          name="notes" 
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="Ако имате някакви специфични изисквания или въпроси, моля напишете ги тук."
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <Button type="button" onClick={goToPreviousStep} variant="outline" className="border-salon-deep-pink text-salon-deep-pink hover:bg-salon-pink">
                        Назад
                      </Button>
                      <Button type="submit" className="bg-salon-deep-pink hover:bg-pink-600 text-white">
                        Потвърди резервация
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
