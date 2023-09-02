export default function Header() {
  return (
    <header className="p-10 px-10  bg-slate-900 flex justify-between lg:px-24">
      <img src="images/logo.png" alt="Cornflix.com" className="h-8" />
      <div className="flex flex-col space-y-1.5 cursor-pointer lg:hidden">
        <span className="w-8 h-1 bg-white"></span>
        <span className="w-8 h-1 bg-white"></span>
        <span className="w-8 h-1 bg-white"></span>
      </div>
      <div className="hidden space-x-2 items-center rounded-3xl py-0.5 px-2 bg-white lg:flex">
        <svg
          fill="#000"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <span className="h-4 w-96 bg-white"></span>
      </div>
      <div className="hidden justify-center items-center space-x-2 text-white cursor-pointer lg:flex">
        <svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
        </svg>
        <span className="text-2xl font-semibold">BOOKMARK</span>
      </div>
    </header>
  );
}
