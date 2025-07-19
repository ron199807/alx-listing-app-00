import Button from "../common/Button";
import Image from "next/image";

export const Navigation = () => {
  return (
    <nav className="flex gap-4 p-6 justify-between"  aria-label="Main navigation w-full">
      {/* First row of buttons */}
      <div className="flex flex-wrap gap-2">
        <a href="#" className="w-fit px-4 py-2 border rounded-full border-green-600 bg-gray-00 text-gray-800 hover:bg-gray-300 font-bold">
          All
        </a>
        <a href="#"  className="w-fit px-2 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-xl">
          Top Villa
        </a>
        <a href="#" className="min-w-fit px-2 py-2 text-gray-800 hover:bg-gray-300 rounded-xl">
          Free Reschedule
        </a>
        <a href="#" className="min-w-fit px-2 py-2 text-gray-800 hover:bg-gray-300 rounded-xl">
          Book Now Pay Later
        </a>
        <a href="#" className="min-w-fit px-2 py-2 text-gray-800 hover:bg-gray-300 rounded-xl">
          Self Check-in
        </a>
        <a href="#" className="min-w-fit px-2 py-2 border-1 text-gray-800 hover:bg-gray-300 rounded-xl">
          Instant Book
        </a>
      </div>

      {/* Second row with filter and sort buttons */}
      <div className="flex justify-end gap-4">
        <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 rounded-xl">
            Filter
          <Image
            src="/assets/icons/Filter.svg"
            alt="Filter"
            width={16}
            height={16}
          />
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 rounded-xl">
          Sort by: Highest Price
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="Sort"
            width={16}
            height={16}
          />
        </a>
      </div>
    </nav>
  );
};