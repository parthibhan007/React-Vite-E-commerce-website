import { Product, Category, Order } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Headphones', 'Cameras']
  },
  {
    id: '2',
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories', 'Watches']
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden', 'Tools']
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Water Sports', 'Winter Sports']
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality noise-cancelling wireless headphones with 30-hour battery life.',
    price: 299.99,
    originalPrice: 399.99,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    subcategory: 'Headphones',
    brand: 'AudioTech',
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    tags: ['wireless', 'noise-cancelling', 'premium'],
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Driver Size': '40mm'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    price: 199.99,
    originalPrice: 249.99,
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    subcategory: 'Wearables',
    brand: 'FitTech',
    rating: 4.6,
    reviews: 892,
    inStock: true,
    tags: ['fitness', 'smartwatch', 'health'],
    specifications: {
      'Display': '1.3" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'GPS': 'Built-in'
    }
  },
  {
    id: '3',
    name: 'Premium Leather Jacket',
    description: 'Genuine leather jacket with modern cut and premium finishing.',
    price: 449.99,
    originalPrice: 599.99,
    images: [
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Fashion',
    subcategory: 'Men\'s Clothing',
    brand: 'StyleCraft',
    rating: 4.7,
    reviews: 543,
    inStock: true,
    tags: ['leather', 'premium', 'jacket'],
    variants: [
      { id: '1', name: 'Size', value: 'S', price: 449.99 },
      { id: '2', name: 'Size', value: 'M', price: 449.99 },
      { id: '3', name: 'Size', value: 'L', price: 449.99 },
      { id: '4', name: 'Size', value: 'XL', price: 469.99 }
    ],
    specifications: {
      'Material': '100% Genuine Leather',
      'Lining': 'Polyester',
      'Care': 'Dry clean only',
      'Origin': 'Made in Italy'
    }
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic office chair with lumbar support and adjustable height.',
    price: 349.99,
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Home & Garden',
    subcategory: 'Furniture',
    brand: 'ComfortPro',
    rating: 4.5,
    reviews: 234,
    inStock: true,
    tags: ['office', 'ergonomic', 'chair'],
    specifications: {
      'Weight Capacity': '300 lbs',
      'Height Range': '16-20 inches',
      'Material': 'Mesh and Fabric',
      'Warranty': '5 years'
    }
  },
  {
    id: '5',
    name: 'Professional Camera',
    description: 'High-resolution DSLR camera perfect for professional photography.',
    price: 1299.99,
    originalPrice: 1499.99,
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    subcategory: 'Cameras',
    brand: 'PhotoMaster',
    rating: 4.9,
    reviews: 167,
    inStock: true,
    tags: ['camera', 'professional', 'photography'],
    specifications: {
      'Sensor': '24MP APS-C',
      'ISO Range': '100-25600',
      'Video': '4K at 30fps',
      'Battery': '600 shots per charge'
    }
  },
  {
    id: '6',
    name: 'Running Sneakers',
    description: 'Lightweight running shoes with advanced cushioning technology.',
    price: 129.99,
    originalPrice: 159.99,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Fashion',
    subcategory: 'Shoes',
    brand: 'RunTech',
    rating: 4.4,
    reviews: 789,
    inStock: true,
    tags: ['running', 'sneakers', 'sports'],
    variants: [
      { id: '1', name: 'Size', value: '8', price: 129.99 },
      { id: '2', name: 'Size', value: '9', price: 129.99 },
      { id: '3', name: 'Size', value: '10', price: 129.99 },
      { id: '4', name: 'Size', value: '11', price: 129.99 }
    ],
    specifications: {
      'Upper Material': 'Mesh and Synthetic',
      'Sole': 'Rubber with Air Cushioning',
      'Weight': '10 oz',
      'Drop': '10mm'
    }
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    userId: '1',
    items: [
      {
        productId: '1',
        productName: 'Premium Wireless Headphones',
        productImage: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200',
        quantity: 1,
        price: 299.99
      }
    ],
    total: 299.99,
    status: 'delivered',
    shippingAddress: {
      id: '1',
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    paymentMethod: 'Credit Card',
    orderDate: '2024-01-15',
    estimatedDelivery: '2024-01-20',
    trackingNumber: 'TRK123456789'
  },
  {
    id: 'ORD002',
    userId: '1',
    items: [
      {
        productId: '2',
        productName: 'Smart Fitness Watch',
        productImage: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=200',
        quantity: 1,
        price: 199.99
      }
    ],
    total: 199.99,
    status: 'shipped',
    shippingAddress: {
      id: '1',
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    paymentMethod: 'Credit Card',
    orderDate: '2024-01-20',
    estimatedDelivery: '2024-01-25',
    trackingNumber: 'TRK987654321'
  }
];