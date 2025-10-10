'use client';

import { TourismService } from '@/app/types';
import TourismServiceCard from './TourismServiceCard';

interface TourismGridProps {
  services: TourismService[];
}

const TourismGrid = ({ services }: TourismGridProps) => {
  if (!services || services.length === 0) {
    return <p className="text-center text-slate-500">No health tourism services available at the moment.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {services.map((service) => (
        <TourismServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default TourismGrid;
