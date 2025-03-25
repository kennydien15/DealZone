import React from 'react';
import { FaHome, FaThermometerHalf, FaBed, FaBath } from 'react-icons/fa';
import { LuCircleParking } from 'react-icons/lu';
import { BsXDiamond } from 'react-icons/bs';
import { PiHeart } from 'react-icons/pi';
import { motion } from 'framer-motion';

interface House {
    id: number;
    image: string;
    title: string;
    price: string;
    address: string;
    yearBuilt: string;
    heating: string;
    parking: string;
    bedrooms: string;
    bathrooms: string;
    sqft: string;
}

interface CardProps {
    house: House;
}

const Card: React.FC<CardProps> = ({ house }) => {
    return (
        <motion.div
            key={house.id}
            className="card bg-[#f8f8f8] shadow-lg overflow-hidden w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)] max-w-sm p-3 sm:p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.0001, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
        >
            {/* Image Section */}
            <div className="relative mb-2">
                <div className="grid grid-cols-2 gap-1">
                    {/* Main Image (takes full left column) */}
                    <img
                        src={house.image}
                        alt={house.title}
                        className="w-full h-full col-span-1 object-cover cursor-pointer"
                    />
                    {/* Two Smaller Images (stacked on the right) */}
                    <div className="flex flex-col gap-1">
                        <img
                            src={house.image} // You can replace with a different image if available
                            alt={house.title}
                            className="w-full h-20 sm:h-24 object-cover cursor-pointer"
                        />
                        <img
                            src={house.image} // You can replace with a different image if available
                            alt={house.title}
                            className="w-full h-20 sm:h-24 object-cover cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="">
                {/* Price and Address */}
                <div className="flex items-center mb-2">
                    {/* Heart Icon Overlay (Aligned to the left) */}
                    <PiHeart className="text-[#b58f46] text-3xl sm:text-4xl cursor-pointer" />

                    {/* Price and Cap Rate (Centered in the remaining space) */}
                    <div className="flex-1 flex justify-center">
                        <div className="flex items-center gap-1 pr-6 sm:pr-9">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-800">{house.price}</h2>
                            <span className="font-medium text-gray-600 text-xs sm:text-sm pt-1">Cap Rate :</span>
                        </div>
                    </div>
                </div>

                <div className="contentSeparation flex gap-1">
                    <div className="contentLeft">
                        <h5 className="text-xs sm:text-sm font-medium">Property for sale</h5>
                        <p
                            className="text-xs sm:text-sm text-gray-600 mb-4 max-w-[10em] overflow-hidden overflow-ellipsis"
                            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                        >
                            {house.address}
                        </p>
                    </div>
                    <div className="contentRight">
                        {/* Details Section */}
                        <div className="flex text-gray-600 mb-4">
                            {/* Left Column */}
                            <div className="flex flex-col gap-y-1 pr-2 sm:pr-3 border-r" style={{ borderColor: '#eee4c3' }}>
                                <div className="flex items-center">
                                    <FaHome className="text-gray-600 mr-1 min-w-[1rem]" />
                                    <span className="truncate max-w-[150px] xl:max-w-[130px] lg:max-w-[110px] md:max-w-[90px] text-[clamp(8px,1.17vw,14px)] overflow-hidden whitespace-nowrap text-ellipsis">
                                        {house.yearBuilt}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FaThermometerHalf className="text-gray-600 mr-1 min-w-[1rem]" />
                                    <span className="truncate max-w-[150px] xl:max-w-[130px] lg:max-w-[110px] md:max-w-[90px] text-[clamp(8px,1.17vw,14px)] overflow-hidden whitespace-nowrap text-ellipsis">
                                        {house.heating}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <LuCircleParking className="text-gray-600 mr-1 min-w-[1rem]" />
                                    <span className="truncate max-w-[150px] xl:max-w-[130px] lg:max-w-[110px] md:max-w-[90px] text-[clamp(8px,1.17vw,14px)] overflow-hidden whitespace-nowrap text-ellipsis">
                                        {house.parking}
                                    </span>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col gap-y-1 pl-2 sm:pl-3">
                                <div className="flex items-center">
                                    <FaBed className="text-gray-600 mr-1 min-w-[1rem]" />
                                    <span className="truncate max-w-[150px] xl:max-w-[130px] lg:max-w-[110px] md:max-w-[90px] text-[clamp(8px,1.17vw,14px)] overflow-hidden whitespace-nowrap text-ellipsis">
                                        {house.bedrooms}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FaBath className="text-gray-600 mr-1 min-w-[1rem]" />
                                    <span className="truncate max-w-[150px] xl:max-w-[130px] lg:max-w-[110px] md:max-w-[90px] text-[clamp(8px,1.17vw,14px)] overflow-hidden whitespace-nowrap text-ellipsis">
                                        {house.bathrooms}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <BsXDiamond className="text-gray-600 mr-1 min-w-[1rem]" />
                                    <span className="truncate max-w-[150px] xl:max-w-[130px] lg:max-w-[110px] md:max-w-[90px] text-[clamp(8px,1.17vw,14px)] overflow-hidden whitespace-nowrap text-ellipsis">
                                        {house.sqft}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Details Button */}
            <button className="w-20  bg-[#b58f46] text-white  text-xs sm:text-sm font-light py-2 cursor-pointer">
                DETAILS
            </button>
        </motion.div>
    );
};

export default Card;