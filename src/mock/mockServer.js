import { createServer } from 'miragejs';

export const makeServer = () => {
  const server = createServer();

  server.namespace = 'api';

  server.get('/products', () => [
    {
      id: 1,
      name: 'Product name',
      description: 'Subtitle with basic ingredients',
      rating: 4.8,
      price: '$49.99',
      image: '/images/product-1.png',
      reviews: 12,
      reviewLink: '/review-product-1',
      detailLink: '/product-1',
    },
    {
      id: 2,
      name: 'Product name',
      description: 'Subtitle with basic ingredients',
      rating: 5,
      price: '$49.99',
      image: '/images/product-2.png',
      reviews: 12,
      reviewLink: '/review-product-2',
      detailLink: '/product-2',
    },
    {
      id: 3,
      name: 'Product name',
      description: 'Subtitle with basic ingredients',
      rating: 4,
      price: '$49.99',
      image: '/images/product-1.png',
      reviews: 12,
      reviewLink: '/review-product-3',
      detailLink: '/product-3',
    },
    {
      id: 4,
      name: 'Product name',
      description: 'Subtitle with basic ingredients',
      rating: 5,
      price: '$49.99',
      image: '/images/product-2.png',
      reviews: 12,
      reviewLink: '/review-product-4',
      detailLink: '/product-4',
    },
  ]);

  return server;
};
