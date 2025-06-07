
import { Product, Category } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'Whey Protein', icon: '💪', productCount: 15 },
  { id: '2', name: 'Pre-Workout', icon: '⚡', productCount: 8 },
  { id: '3', name: 'Creatine', icon: '🔥', productCount: 6 },
  { id: '4', name: 'Gym Equipment', icon: '🏋️', productCount: 12 },
  { id: '5', name: 'Sportswear', icon: '👕', productCount: 20 },
  { id: '6', name: 'Vitamins', icon: '💊', productCount: 10 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Optimum Nutrition Gold Standard Whey',
    description: 'Whey protein cao cấp với 24g protein mỗi khẩu phần, hỗ trợ phát triển cơ bắp tối ưu.',
    price: 1500000,
    originalPrice: 1800000,
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=500',
    category: 'Whey Protein',
    brand: 'Optimum Nutrition',
    inStock: true,
    rating: 4.8,
    reviews: 156,
    sellerId: '1'
  },
  {
    id: '2',
    name: 'C4 Original Pre-Workout',
    description: 'Pre-workout mạnh mẽ giúp tăng cường năng lượng và sự tập trung trong tập luyện.',
    price: 800000,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=500',
    category: 'Pre-Workout',
    brand: 'Cellucor',
    inStock: true,
    rating: 4.6,
    reviews: 89,
    sellerId: '1'
  },
  {
    id: '3',
    name: 'Creatine Monohydrate 300g',
    description: 'Creatine tinh khiết 100% giúp tăng sức mạnh và sức bền trong tập luyện.',
    price: 600000,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    category: 'Creatine',
    brand: 'Universal',
    inStock: true,
    rating: 4.7,
    reviews: 234,
    sellerId: '1'
  },
  {
    id: '4',
    name: 'Adjustable Dumbbells Set',
    description: 'Bộ tạ điều chỉnh được từ 5-40kg, tiết kiệm không gian tập luyện tại nhà.',
    price: 3500000,
    originalPrice: 4000000,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    category: 'Gym Equipment',
    brand: 'PowerBlock',
    inStock: true,
    rating: 4.9,
    reviews: 67,
    sellerId: '2'
  },
  {
    id: '5',
    name: 'Gym Tank Top Pro',
    description: 'Áo tank top thể thao cao cấp, thoáng mát và co giãn tốt cho mọi bài tập.',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500',
    category: 'Sportswear',
    brand: 'Nike',
    inStock: true,
    rating: 4.4,
    reviews: 112,
    sellerId: '2'
  },
  {
    id: '6',
    name: 'Multivitamin Daily',
    description: 'Vitamin tổng hợp hỗ trợ sức khỏe tổng thể và phục hồi sau tập luyện.',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=500',
    category: 'Vitamins',
    brand: 'Optimum',
    inStock: true,
    rating: 4.3,
    reviews: 78,
    sellerId: '1'
  }
];
