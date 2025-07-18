import type { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { DEFAULT_IMAGE } from '../constants';
import { Header } from '@/components/layout/Header';

const Home: NextPage = () => {
  const sampleListing = {
    title: 'Beautiful Apartment',
    description: 'Modern apartment in the city center',
    imageUrl: DEFAULT_IMAGE,
    price: 120,
    rating: 4.8,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <h1 className="text-3xl font-bold mb-8">Available Listings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card {...sampleListing} />
        <Card {...sampleListing} />
        <Card {...sampleListing} />
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Home;