'use client';

import { TourismService } from '@/app/types';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.js'i projemize tanıtıyoruz
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TourismServiceCardProps {
  service: TourismService;
}

const TourismServiceCard = ({ service }: TourismServiceCardProps) => {
  const chartData = {
    labels: service.data.cost.labels,
    datasets: [
      {
        label: 'Approximate Cost (USD)',
        data: service.data.cost.values,
        backgroundColor: [
          'rgba(255, 255, 255, 0.35)',
          'rgba(255, 255, 255, 0.85)',
        ],
        borderColor: ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Cost Comparison (USD)',
        color: '#FFFFFF',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { 
          color: 'rgba(255,255,255,0.9)',
          callback: (value: string | number) => '$' + Number(value).toLocaleString()
        },
        grid: { color: 'rgba(255,255,255,0.25)' },
      },
      x: {
        ticks: { color: 'rgba(255,255,255,0.9)' },
        grid: { display: false },
      },
    },
  };

  const handleRequestConsultation = () => {
    // Bu fonksiyon şimdilik bir uyarı gösterebilir.
    // Daha sonra /request sayfasına yönlendirme ve formu önceden doldurma gibi
    // bir mantık eklenebilir.
    alert(`VIP consultation requested for ${service.name}. Our team will contact you shortly!`);
  }

  return (
    <div className="clinic-card" style={{ minHeight: '450px' }}>
      <div className="clinic-card-inner">
        {/* KARTIN ÖN YÜZÜ */}
        <div 
          className="card-face card-front" 
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${service.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '1.5rem',
          }}
        >
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
            RAINGAIA Elite
          </div>
          <i className={`${service.icon} text-4xl mb-4 opacity-80`}></i>
          <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
          <p className="text-base leading-tight">{service.promotional_text}</p>
        </div>

        {/* KARTIN ARKA YÜZÜ */}
        <div 
          className="card-face card-back"
          style={{
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #003366, #2b6cb0)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          <i className={`${service.icon} text-5xl mb-4 opacity-80`}></i>
          <h4 className="text-xl font-bold mb-2">{service.name}</h4>
          <p className="text-sm mb-4 italic">{service.service_type}</p>
          <div className="w-full h-[140px] cursor-pointer mb-4">
            <Bar options={chartOptions} data={chartData} />
          </div>
          <button 
            onClick={handleRequestConsultation}
            className="add-to-cart-btn bg-white text-[#003366] font-bold py-2 px-6 rounded-full text-sm hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
          >
            Request VIP Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourismServiceCard;
