import React, { useState } from 'react';
import { FaRulerCombined, FaHome, FaThermometerHalf, FaBed, FaBath } from 'react-icons/fa';
import { LuCircleParking } from "react-icons/lu";
import { BsXDiamond } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

interface PurchasedRecentlyProps {
    price: string;
    address: string;
    income: string;
    cashflow: string;
    cashflowAfter: string;
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
    cashflowAfter,
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
    // État pour gérer l'affichage du skeleton loader
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <div className="purchasedRecentlyContainer bg-[#f8f8f8] cursor-grab">
            <div className="upperSection bg-[#f8f8f8] flex flex-col items-center justify-center mb-4">
                <h1 className="text-4xl text-gray-800 mb-2 font-montserrat">Deal Zone</h1>
                <h4 className="text-sm font-medium text-gray-600 tracking-wider font-lato">PURCHASED RECENTLY</h4>
            </div>
            <div className="lowerSection flex flex-col lg:flex-row">
                {/* Section gauche : Image */}
                <div className="leftSection w-full lg:w-1/2 relative">
                    {/* Skeleton loader, affiché si l'image n'est pas chargée */}
                    {!isImageLoaded && (
                        <motion.div
                            className="absolute inset-0 bg-gray-200"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}

                    {/* Image avec animation d'opacité */}
                    <motion.img
                        src={imageUrl}
                        alt="Property"
                        className="w-full h-full object-cover relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onLoad={() => setIsImageLoaded(true)} // Met à jour l'état quand l'image est chargée
                        style={{ pointerEvents: 'none' }} // Désactive les interactions avec l'image
                    />
                </div>
                {/* Section droite : Détails */}
                <div className="rightSection w-full lg:w-1/2 flex flex-col justify-between">
                    <div className="upSection p-6 mt-15 ml-10">
                        <div>
                            <div className="basicDetails flex flex-col items-start">
                                <h2 className="text-3xl font-medium text-gray-800 mb-2">{price}</h2>
                                <p className="text-sm text-gray-600">{address}</p>
                            </div>
                            <div className="financialDetails text-sm text-gray-700 space-y-1 mt-7">
                                <p><span className="font-medium">Income:</span> <span className='text-2xl font-medium'>{income}</span>/mo</p>
                                <p><span className="font-medium">Cashflow:</span> <span className='text-2xl font-medium'>{cashflow}</span>/mo <span className='text-[#c1a262] text-3xl'></span> <span className='text-2xl font-medium'>{cashflowAfter}</span>/mo</p>
                                <p><span className="font-medium">Rehab:</span> <span className='text-2xl font-medium'>{rehab}</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Spécifications en bas avec 4 colonnes et 2 lignes */}
                    <div className="specs flex justify-center text-xs text-white bg-[#c1a262] py-3 px-4 mt-6 w-full">
                        <div className="flex flex-wrap items-center gap-4 max-w-4xl justify-center">
                            {/* Colonne 1 */}
                            <div className="flex flex-col space-y-1 min-w-[120px] items-center">
                                <div className="flex justify-start space-x-2 w-[100px]">
                                    <BsXDiamond className="text-white flex-shrink-0" />
                                    <span className="text-left">{sqft} Sqft</span>
                                </div>
                                <div className="flex justify-start space-x-2 w-[100px]">
                                    <FaRulerCombined className="text-white flex-shrink-0" />
                                    <span className="text-left">{lotSize}</span>
                                </div>
                            </div>
                            <div className="hidden md:flex flex-col space-y-2 items-center">
                                <div className="border-l border-white h-4"></div>
                                <div className="border-l border-white h-4"></div>
                            </div>
                            {/* Colonne 2 */}
                            <div className="flex flex-col space-y-1 min-w-[120px] items-center">
                                <div className="flex justify-start space-x-2 w-[100px]">
                                    <FaHome className="text-white flex-shrink-0" />
                                    <span className="text-left">{yearBuilt}</span>
                                </div>
                                <div className="flex justify-start space-x-2 w-[100px]">
                                    <IoCubeOutline className="text-white flex-shrink-0" />
                                    <span className="text-left">{rooms}</span>
                                </div>
                            </div>
                            <div className="hidden md:flex flex-col space-y-2 items-center">
                                <div className="border-l border-white h-4"></div>
                                <div className="border-l border-white h-4"></div>
                            </div>
                            {/* Colonne 3 */}
                            <div className="flex flex-col space-y-1 min-w-[120px] items-center">
                                <div className="flex justify-start space-x-2 w-[100px]">
                                    <FaThermometerHalf className="text-white flex-shrink-0" />
                                    <span className="text-left">{heating}</span>
                                </div>
                                <div className="flex justify-start space-x-2 w-[100px]">
                                    <FaBath className="text-white flex-shrink-0" />
                                    <span className="text-left">{bathrooms}</span>
                                </div>
                            </div>
                            <div className="hidden md:flex flex-col space-y-2 items-center">
                                <div className="border-l border-white h-4"></div>
                                <div className="border-l border-white h-4"></div>
                            </div>
                            {/* Colonne 4 */}
                            <div className="flex flex-col space-y-1 min-w-[120px] items-center">
                                <div className="flex justify-start space-x-2 w-[100px]">
                                    <LuCircleParking className="text-white flex-shrink-0" />
                                    <span className="text-left">{parking}</span>
                                </div>
                                <div className="flex justify-start space-x-2 w-[100px]">
                                    <FaBed className="text-white flex-shrink-0" />
                                    <span className="text-left">{bedrooms}</span>
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