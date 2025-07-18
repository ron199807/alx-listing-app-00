import Image from "next/image";
import Button from "../common/Button";

export const Header = () => {
  return (
    <header className="flex justify-center h-13 items-center w-full bg-teal-600 gap-4 text-white pt-0">
      <div>
        <Image
          className="w-6 object-cover cursor-pointer hover:bg-cyan-900"
          src="./assets/icons/Case.svg"
          alt="Travel information"
          width={24}
          height={24}
        />
      </div>
      <div>
        <p className="text-white">
          Overseas trip? Get the latest information on travel guides
        </p>
      </div>
      <div>
        <Button
          className="h-9 w-auto cursor-pointer font-bold bg-gray-950 text-white hover:bg-gray-600 rounded-xl ml-4 px-4 py-2"
          aria-label="More information about travel guides"
        >
          More Info
        </Button>
      </div>
    </header>
  );
};