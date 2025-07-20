import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { PROPERTYLISTINGSAMPLE, FILTERS } from "../constants";
import Card from "../components/common/Card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // filter properties based on active filter and search query
  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) => {
    // filter by category if an active filter is selected
    const matchesFiter = activeFilter
      ? property.category.some((cat) =>
          cat.toLowerCase().includes(activeFilter.toLowerCase())
        )
      : true;

    // filter by search query (name, city, or country)
    const machesSearch = searchQuery
      ? property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.address.country
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        property.address.city.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesFiter && machesSearch;
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const clearAllFilters = () => {
    setActiveFilter(null);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>ALX Listing App - Find Your Perfect Stay</title>
        <meta
          name="description"
          content="Discover the best properties worldwide"
        />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
        `}</style>
      </Head>

      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 w-full overflow-hidden">
        {/* Hero Section */}
        <section className="mb-10">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by property name, city, or country..."
              className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-4 top-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Combined Filters Navigation */}
        <nav className="flex flex-col md:flex-row gap-4 py-6 justify-between mb-8" aria-label="Main navigation">
          {/* First row of buttons and dropdown */}
          <div className="flex flex-wrap gap-2 items-center">
            {/* All filter button */}
            <button
              onClick={() => setActiveFilter(null)}
              className={`w-fit px-4 py-2 border rounded-full ${!activeFilter ? 'border-green-600 bg-gray-00 text-gray-800 font-bold' : 'border-gray-300 bg-gray-200 hover:bg-gray-300'}`}
            >
              All
            </button>

            {/* Main filters */}
            {FILTERS.slice(0, 2).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
                className={`w-fit px-2 py-2 rounded-xl ${activeFilter === filter ? 'bg-teal-100 text-teal-800' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {filter}
              </button>
            ))}

            {/* Dropdown for small screens */}
            <div className="md:hidden relative">
              <button 
                onClick={toggleDropdown}
                className="min-w-fit px-2 py-2 text-gray-800 hover:bg-gray-300 rounded-xl flex items-center"
              >
                More
                <Image
                  src="/assets/icons/arrow-down.svg"
                  alt="More options"
                  width={16}
                  height={16}
                  className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  {FILTERS.slice(2).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => {
                        setActiveFilter(activeFilter === filter ? null : filter);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 ${activeFilter === filter ? 'bg-teal-100 text-teal-800' : 'bg-gray-200 hover:bg-gray-100'}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hidden on small screens, visible on medium and up */}
            <div className="hidden md:flex gap-2">
              {FILTERS.slice(2).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
                  className={`min-w-fit px-2 py-2 rounded-xl ${activeFilter === filter ? 'bg-teal-100 text-teal-800' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Second row with filter and sort buttons */}
          <div className="flex justify-end gap-4">
            {(activeFilter || searchQuery) && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-4 py-2 bg-white text-teal-600 hover:text-teal-800 font-medium"
              >
                Clear filters
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </nav>

        {/* Results Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredProperties.length}{" "}
            {filteredProperties.length === 1 ? "Property" : "Properties"} Found
          </h2>
        </div>

        {/* Properties Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
          {filteredProperties.map((property) => (
            <Card
              // key={property.id}
              title="Villa Arrecife Beach House"
              location="Sideman, Bali, Indonesia"
              price={2450}
              rating={4.76}
              beds={4}
              baths={2}
              guests={4}
              amenities={["Top Villa", "Self CheckIn", "Free Reschedule"]}
              onClick={() => console.log("Card clicked")}
            />
          ))}
        </section>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              No properties found
            </h3>
            <p className="mt-2 text-gray-500">
              {activeFilter || searchQuery
                ? "Try adjusting your search or filter to find what you're looking for."
                : "There are currently no properties available."}
            </p>
            {(activeFilter || searchQuery) && (
              <button
                onClick={clearAllFilters}
                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}