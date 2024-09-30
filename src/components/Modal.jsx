
// export default function Modal({ country, setShowModal}) {
//   const hideModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div
//           onClick={hideModal}
//           className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="bg-gray-200 p-5 rounded-lg mx-4"
//           >
//             <div className="flex justify-between mb-3 border-b-2 pb-2 border-gray-400">
//               <p className="font-bold uppercase">{country?.name?.common}</p>
//               <button
//                 onClick={hideModal}
//                 className="text-gray-600 font-extrabold bg-transparent hover:bg-gray-400 hover:text-gray-900 rounded-lg text-lg w-8 h-8 ms-auto inline-flex justify-center items-center "
//               >
//                 X
//               </button>
//             </div>
//             <div className="space-y-3">
//               <img
//                 className="max-w-72"
//                 src={country?.flag}
//                 alt={country?.name?.common}
//               />
//               <p>
//                 Official Name:{" "}
//                 <span className="font-bold">{country?.name?.official}</span>
//               </p>
//               <p>
//                 Capital Name:{" "}
//                 <span className="font-bold">{country?.capital}</span>
//               </p>
//               <p>
//                 Language:{" "}
//                 <span className="font-bold">{country?.languages?.eng}</span>
//               </p>
//               <p>
//                 Region: <span className="font-bold">{country?.region}</span>
//               </p>
//               <ul>
//                 {country?.currencies.length > 0 ? (
//                   country?.currencies.map(({ code, name, symbol }) => (
//                     <li key={code}>
//                       Currencies:{" "}
//                       <span className="font-bold">
//                         {name} {symbol} - {code}
//                       </span>
//                     </li>
//                   ))
//                 ) : (
//                   <p className="font-bold">Currencies not available</p>
//                 )}
//               </ul>
//               <p>
//                 Status: <span className="font-bold">{country?.status}</span>
//               </p>
//             </div>
//           </div>
//         </div>
//   )
// }