import { useState } from "react";

export default function Country({ country, countryDetails }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    countryDetails(country);
  };

  return (
    <div className="px-6">
      <div className="bg-[#34495e] transition-all hover:bg-[#2b3945] text-white shadow-xl mb-5 max-w-[920px] mx-auto">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-4">
            <img
              onClick={handleToggle}
              className="w-20 cursor-pointer "
              src={country?.flags?.png}
              alt={country?.name?.common}
            />
            <div>
              <p>
                <span className="font-bold">{country?.name?.common}</span>
              </p>
              <p>
                Population:{" "}
                <span className="font-bold">{country?.population}</span>
              </p>
            </div>
          </div>
          <button
            onClick={handleToggle}
            className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border hover:bg-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${
              toggle
                ? "bg-red-600 text-white dark:bg-red-500 dark:hover:bg-red-400 cursor-not-allowed"
                : "bg-white hover:text-blue-700"
            }`}
            disabled={toggle}
          >
            {toggle ? `${"Visited"}` : "Details"}
          </button>
        </div>
      </div>
    </div>
  );
}
