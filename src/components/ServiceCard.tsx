
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <Card className="service-card bg-white overflow-hidden border border-gray-100 h-full">
      <CardContent className="p-6">
        <div className="flex justify-center mb-4 text-salon-deep-pink">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button asChild variant="outline" className="border-salon-deep-pink text-salon-deep-pink hover:bg-salon-pink hover:text-salon-deep-pink">
          <Link to={link}>Научете повече</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
