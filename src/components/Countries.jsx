import { useEffect, useState } from "react";
import Country from "./Country";
import Header from "./Header";
import Footer from "./Footer";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const countryList = async () => {
      const fetchData = await fetch("https://restcountries.com/v3.1/all");
      const data = await fetchData.json();
      const filterCountries = data.filter(
        (country) =>
          country?.name?.common !== "India" &&
          country?.name?.common !== "Israel" &&
          country?.region !== "Europe" &&
          country?.region !== "Americas"
      );
      setCountries(filterCountries);
    };
    countryList();
  }, []);

  const countryDetails = (countryInfo) => {
    const countryCurrencies = Object.entries(countryInfo?.currencies || {}).map(
      (currency) => {
        const [code, { name, symbol }] = currency;
        return { code, name, symbol };
      }
    );
    setCountry({
      ...countryInfo,
      flag: countryInfo?.flags?.png,
      population: countryInfo?.population,
      currencies: countryCurrencies,
    });
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div
          onClick={hideModal}
          className="fixed z-30 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-200 p-5 rounded-lg mx-4"
          >
            <div className="flex justify-between mb-3 border-b-2 pb-2 border-gray-400">
              <p className="font-bold uppercase">{country?.name?.common}</p>
              <button
                onClick={hideModal}
                className="text-gray-600 font-extrabold bg-transparent hover:bg-gray-400 hover:text-gray-900 rounded-lg text-lg w-8 h-8 ms-auto inline-flex justify-center items-center "
              >
                X
              </button>
            </div>
            <div className="space-y-3">
              <img
                className="max-w-72"
                src={country?.flag}
                alt={country?.name?.common}
              />
              <p>
                Official Name:{" "}
                <span className="font-bold">{country?.name?.official}</span>
              </p>
              <p>
                Capital Name:{" "}
                <span className="font-bold">{country?.capital}</span>
              </p>
              <p>
                Language:{" "}
                <span className="font-bold">
                  {country?.languages?.eng === "English"
                    ? country?.languages?.eng
                    : "Language Not Available"}
                </span>
              </p>
              <p>
                Region: <span className="font-bold">{country?.region}</span>
              </p>
              <ul>
                {country?.currencies.length > 0 ? (
                  country?.currencies.map(({ code, name, symbol }) => (
                    <li key={code}>
                      Currencies:{" "}
                      <span className="font-bold">
                        {name} {symbol} - {code}
                      </span>
                    </li>
                  ))
                ) : (
                  <p className="font-bold">Currencies not available</p>
                )}
              </ul>
              <p>
                Status: <span className="font-bold">{country?.status}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#202c37]">
        <Header />
        <div className="pt-36">
          {countries
            .sort((a, b) => {
              return b?.population - a?.population;
            })
            .map((country) => (
              <Country
                key={country?.cca3}
                country={country}
                countryDetails={countryDetails}
              />
            ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
