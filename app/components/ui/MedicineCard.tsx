'use client';

import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { Medicine } from '@/app/data/medicines';

interface MedicineCardProps {
  medicine: Medicine;
}

const MedicineCard = ({ medicine }: MedicineCardProps) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: medicine.id,
      name: medicine.name,
      type: 'medicine',
      details: medicine.indication,
    });
    alert(`${medicine.name} has been added to your request list.`);
  };

  return (
    <div className="medicine-card p-6 flex flex-col items-center text-center">
        {/* ... Kartın HTML yapısını buraya React (JSX) formatında taşıyın ... */}
        {/* onClick event'lerini React'in onClick prop'una dönüştürün */}
        <button onClick={handleAddToCart} className="...">
          Add to Request List
        </button>
    </div>
  );
};

export default MedicineCard;
