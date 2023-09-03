import { useState } from "react";

export default function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="grid grid-cols-2 space-y-6 items-center justify-center p-8 px-10 bg-slate-900 lg:px-24 md:grid-cols-3 md:space-y-0 ">
      <img src="images/logo.png" alt="Cornflix.com" className="h-7" />
      <div
        className="flex flex-col space-y-1.5 cursor-pointer place-self-end md:hidden"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <span className="w-8 h-1 bg-white"></span>
        <span className="w-8 h-1 bg-white"></span>
        <span className="w-8 h-1 bg-white"></span>
      </div>

      {children}

      <div className="hidden justify-end items-center space-x-2 text-white cursor-pointer md:flex">
        <svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
        </svg>
        <span className="text-xl font-semibold self-end text-white">
          BOOKMARK
        </span>
      </div>
    </header>
  );
}
