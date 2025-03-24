import React from 'react';
import { FaRulerCombined, FaHome, FaThermometerHalf, FaCar, FaBed, FaBath } from 'react-icons/fa'; // Importing icons from react-icons
import { GiDiamondHard } from 'react-icons/gi'; // For the diamond icon

// Define the props interface
interface PurchasedRecentlyProps {
    price: string;
    address: string;
    income: string;
    cashflow: string;
    rehab: string;
    sqft: string;
    lotSize: string;
    yearBuilt: string;
    rooms: string;
    heating: string;
    bathrooms: string;
    parking: string;
    bedrooms: string;
    imageUrl: string;
}

const PurchasedRecently: React.FC<PurchasedRecentlyProps> = ({
    price,
    address,
    income,
    cashflow,
    rehab,
    sqft,
    lotSize,
    yearBuilt,
    rooms,
    heating,
    bathrooms,
    parking,
    bedrooms,
    imageUrl,
}) => {
    return (
        <div className="purchasedRecentlyContainer bg-white">
            <div className="upperSection bg-white flex flex-col items-center justify-center mb-3">
                <h1 className="text-4xl  text-gray-800 mb-2 font-montserrat">Deal Zone</h1>
                <h4 className="text-sm font-medium text-gray-600 tracking-wider font-lato">PURCHASED RECENTLY</h4>
            </div>
            <div className="lowerSection flex flex-col lg:flex-row">
                {/* Left Section: Image */}
                <div className="leftSection w-full lg:w-1/2">
                    <img src={imageUrl} alt="Property" className="w-full h-full object-cover" />
                </div>
                {/* Right Section: Details */}
                <div className="rightSection w-full lg:w-1/2 flex flex-col justify-between">
                    <div className="upSection  p-6 mt-12 ml-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">{price}</h2>
                            <p className="text-sm text-gray-600 mb-4">{address}</p>
                            <div className="financialDetails text-sm text-gray-700 space-y-1">
                                <p><span className="font-medium">Income:</span> {income}</p>
                                <p><span className="font-medium">Cashflow:</span> {cashflow}</p>
                                <p><span className="font-medium">Rehab:</span> {rehab}</p>
                            </div>
                        </div>
                    </div>

                    {/* Updated Bottom Specs with 4 Columns and 2 Rows */}
                    <div className="specs flex justify-center text-xs text-white bg-yellow-600 py-3 px-4 mt-6 w-full">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#c1a262] flex items-center space-x-4"></div>
                            {/* Column 1 */}
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-2">
                                    <GiDiamondHard className="mr-1 text-white" /> {sqft} Sqft
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaRulerCombined className="mr-1 text-white" /> {lotSize}
                                </div>
                            </div>
                            {/* Separator */}
                            <div className="border-l border-white h-8 mx-2"></div>
                            {/* Column 2 */}
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-2">
                                    <FaHome className="mr-1 text-white" /> {yearBuilt}
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaHome className="mr-1 text-white" /> {rooms}
                                </div>
                            </div>
                            {/* Separator */}
                            <div className="border-l border-white h-8 mx-2"></div>
                            {/* Column 3 */}
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-2">
                                    <FaThermometerHalf className="mr-1 text-white" /> {heating}
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaBath className="mr-1 text-white" /> {bathrooms}
                                </div>
                            </div>
                            {/* Separator */}
                            <div className="border-l border-white h-8 mx-2"></div>
                            {/* Column 4 */}
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-2">
                                    <FaCar className="mr-1 text-white" /> {parking}
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaBed className="mr-1 text-white" /> {bedrooms}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasedRecently;