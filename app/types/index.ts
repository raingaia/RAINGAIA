// Bu dosyanın daha önce oluşturulduğunu varsayıyoruz.
export interface Medicine {
  id: number;
  category: string;
  subcategory?: 'gene-therapy' | 'enzyme-replacement' | 'neuromuscular' | 'rare-diseases-general';
  name: string;
  indication: string;
  details: string;
  icon: string;
  status: 'available' | 'special-request';
}

export interface TourismService {
  id: number;
  name: string;
  promotional_text: string;
  rating: number;
  image: string;
  icon: string;
  service_type: string;
  data: {
    cost: {
      labels: string[];
      values: number[];
    };
  };
}

export interface CartItem {
  id: number;
  name: string;
  type: 'medicine' | 'service';
  details: string;
}
