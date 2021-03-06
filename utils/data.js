import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@exampl.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@exampl.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Engine Oil',
      slug: 'free-engine-oil',
      category: 'Car Engine Oil',
      images: '/images/engine_oil1.jpg',
      price: 70,
      brand: 'Repco',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular engine oil for car.',
    },
    {
      name: 'Full Synthetic Oils',
      slug: 'full-synthetic-oils',
      category: 'Car Engine Oil',
      images: '/images/engine_oil2.jpg',
      price: 50,
      brand: 'Gulf',
      rating: 4.3,
      numReviews: 5,
      countInStock: 30,
      description: 'A popular engine oil for car.',
    },
    {
      name: 'Semi Synthetic Oils',
      slug: 'semi-synthetic-oils',
      category: 'Car Engine Oil',
      images: '/images/engine_oil3.jpg',
      price: 45,
      brand: 'Penrite',
      rating: 4.5,
      numReviews: 12,
      countInStock: 10,
      description: 'A popular engine oil for car.',
    },
    {
      name: 'Mineral Engine Oil',
      slug: 'mineral-engine-oil',
      category: 'Bike Engine Oil',
      images: '/images/engine_oil4.jpg',
      price: 100,
      brand: 'Castrol',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular engine oil for bike.',
    },
    {
      name: 'Special Engine Oil',
      slug: 'special-engine-oil',
      category: 'Bike Engine Oil',
      images: '/images/engine_oil5.jpg',
      price: 200,
      brand: 'Valvolie',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular engine oil for bike.',
    },
  ],
};

export default data;
