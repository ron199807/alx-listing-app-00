import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { PROPERTYLISTINGSAMPLE, FILTERS } from '../constants';
import Card from '../components/common/Card';
import Pill from '@/components/layout/Pill';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const[searchQuery, setSearchQuery] = useState('');

  // filter properties based on active filter and search query
  const filteredProperties = PROPERTYLISTINGSAMPLE.filter(property => {
    // filter by category if an active filter is selected
    const matchesFiter = activeFilter 
      ? property.category.some(cat => cat.toLowerCase().includes(activeFilter.toLowerCase()))
      : true

    // filter by search query (name, city, or country)
    const machesSearch = searchQuery
      ? property.name.toLowerCase().includes(searchQuery.toLowerCase()) || property.address.country.toLowerCase().includes(searchQuery.toLowerCase()) || 
      property.address.city.toLowerCase().includes(searchQuery.toLowerCase())
      : true

    return machesSearch && machesSearch;
  })



  return (
    <div className="container mx-auto px-4 py-8">
       <Head>
        <title>ALX Listing App - Find Your Perfect Stay</title>
        <meta name="description" content="Discover the best properties worldwide" />
      </Head>

      <main className='container mx-auto px-4 py-6'>
        {/* Hero Section */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find your favorite place here!</h1>
          <p className="text-xl text-gray-600 mb-6">
            The best prices for over 2 million properties worldwide.
          </p>
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search by property name, city, or country..."
              className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-4 top-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter by:</h2>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(filter => (
              <Pill
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
              />
            ))}
          </div>
        </section>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
          </h2>
          {activeFilter && (
            <button 
              onClick={() => setActiveFilter(null)}
              className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
            >
              Clear filters
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>

        {/* Properties Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map(property => (
            <Card
              key={property.name}
              title={property.name}
              description={`${property.address.city}, ${property.address.country}`}
              imageUrl={property.image || '/assets/placeholder.jpg'}
              price={property.price}
              rating={property.rating}
              onClick={() => console.log('Property clicked:', property.name)}
            />
          ))}
        </section>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No properties found</h3>
            <p className="mt-2 text-gray-500">
              {activeFilter || searchQuery 
                ? 'Try adjusting your search or filter to find what you\'re looking for.'
                : 'There are currently no properties available.'}
            </p>
            {(activeFilter || searchQuery) && (
              <button
                onClick={() => {
                  setActiveFilter(null);
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}


      </main>
    </div>
  );
};