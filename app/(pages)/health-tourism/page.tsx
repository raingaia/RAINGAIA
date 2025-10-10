import { tourismServices } from '@/app/data/tourismServices';
import TourismGrid from '@/app/components/features/health-tourism/TourismGrid';

export default function HealthTourismPage() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            Elite Global Health Tourism
          </h2>
          <p className="mt-2 text-slate-700 max-w-3xl mx-auto text-lg">
            Experience unparalleled VIP medical services at RAINGAIA's
            handpicked, world-renowned institutions. Our exclusive "RAINGAIA
            Elite" certification guarantees premium, bespoke care tailored to
            your needs – where luxury meets cutting-edge medicine.
          </p>
        </div>
        
        <TourismGrid services={tourismServices} />
        
      </div>
    </section>
  );
}
