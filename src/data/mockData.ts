import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 25
  },
  {
    id: '2',
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 40
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 30
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 20
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 299000,
    originalPrice: 399000,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals.',
    stock: 15,
    rating: 4.8,
    featured: true,
    discount: 25,
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'John Doe',
        rating: 5,
        comment: 'Amazing sound quality and comfortable to wear for long periods.',
        date: '2024-01-15'
      },
      {
        id: '2',
        userId: '2',
        userName: 'Jane Smith',
        rating: 4,
        comment: 'Great headphones, but could be a bit cheaper.',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    price: 2499000,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Advanced smartwatch with health monitoring, GPS tracking, and seamless smartphone integration. Track your fitness goals and stay connected.',
    stock: 8,
    rating: 4.6,
    featured: true,
    reviews: [
      {
        id: '3',
        userId: '3',
        userName: 'Mike Johnson',
        rating: 5,
        comment: 'Perfect for tracking workouts and daily activities.',
        date: '2024-01-12'
      }
    ]
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt',
    price: 149000,
    originalPrice: 199000,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Soft, comfortable cotton t-shirt made from premium materials. Available in multiple colors and sizes.',
    stock: 25,
    rating: 4.4,
    discount: 25,
    reviews: [
      {
        id: '4',
        userId: '4',
        userName: 'Sarah Wilson',
        rating: 4,
        comment: 'Very comfortable and good quality fabric.',
        date: '2024-01-08'
      }
    ]
  },
  {
    id: '4',
    name: 'Leather Backpack',
    price: 899000,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Stylish leather backpack perfect for work or travel. Multiple compartments and durable construction.',
    stock: 12,
    rating: 4.7,
    featured: true,
    reviews: [
      {
        id: '5',
        userId: '5',
        userName: 'David Brown',
        rating: 5,
        comment: 'Excellent quality leather and very spacious.',
        date: '2024-01-05'
      }
    ]
  },
  {
    id: '5',
    name: 'Ceramic Plant Pot Set',
    price: 199000,
    image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Beautiful ceramic plant pot set perfect for indoor plants. Includes drainage holes and saucers.',
    stock: 20,
    rating: 4.3,
    reviews: [
      {
        id: '6',
        userId: '6',
        userName: 'Emma Davis',
        rating: 4,
        comment: 'Beautiful pots, perfect for my plants.',
        date: '2024-01-03'
      }
    ]
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    price: 299000,
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports',
    description: 'High-quality yoga mat with excellent grip and cushioning. Perfect for yoga, pilates, and other exercises.',
    stock: 18,
    rating: 4.5,
    reviews: [
      {
        id: '7',
        userId: '7',
        userName: 'Lisa Anderson',
        rating: 5,
        comment: 'Great grip and very comfortable for yoga practice.',
        date: '2024-01-01'
      }
    ]
  }
];