export default function Header({ handleSort }) {
  return (
    <header
      onChange={(e) => handleSort(e.target.value)}
      className=" fixed right-0 left-0 flex items-center justify-between bg-[#2b3945] px-10 py-6 text-white"
    >
      <div className="md:flex items-center gap-2 cursor-pointer">
      <img
          className="w-10"
          src="https://e7.pngegg.com/pngimages/770/999/png-clipart-globe-illustration-globe-logo-white-signal-orbit-the-earth-computer-network-black-white-thumbnail.png"
          alt="logo"
        />
        <p className="hidden md:block">Countries in the World</p>
      </div>
      <div className="">
        <input
          type="search"
          className="block p-4 w-48 md:w-72 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search Country..."
        />
      </div>
    </header>
  );
}
