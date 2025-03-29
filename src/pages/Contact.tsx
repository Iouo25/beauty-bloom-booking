
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Непълна информация",
        description: "Моля, попълнете всички задължителни полета.",
        variant: "destructive",
      });
      return;
    }
    
    // Success message
    toast({
      title: "Съобщението е изпратено!",
      description: "Благодарим ви за съобщението. Ще се свържем с вас възможно най-скоро.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Контакти</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Свържете се с нас</h2>
                  
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
                        <Label htmlFor="email">Имейл *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Тема</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Съобщение *</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          required
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="mt-6 bg-salon-deep-pink hover:bg-pink-600 text-white">
                      Изпрати съобщение
                    </Button>
                  </form>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Информация за контакт</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Адрес</h3>
                      <p className="text-gray-600">
                        ул. Витоша 25<br />
                        София, 1000<br />
                        България
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Контакти</h3>
                      <p className="text-gray-600">
                        Телефон: +359 2 123 4567<br />
                        Email: info@krasota-i-blyasak.bg
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Работно време</h3>
                      <p className="text-gray-600">
                        Понеделник - Петък: 9:00 - 20:00<br />
                        Събота: 10:00 - 18:00<br />
                        Неделя: Затворено
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Социални мрежи</h3>
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
                
                <div className="bg-salon-pink rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Запазете час онлайн</h3>
                  <p className="text-gray-700 mb-6">
                    Резервирайте час за вашата процедура бързо и лесно чрез нашата онлайн система за резервации.
                  </p>
                  <Button asChild className="bg-salon-deep-pink hover:bg-pink-600 text-white w-full">
                    <a href="/booking">Запази час сега</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
