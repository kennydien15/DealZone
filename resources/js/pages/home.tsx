//import { type SharedData } from '@/types';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import PurchasedRecently from '@/components_Used/purshasedRecently';
import { GiSettingsKnobs } from "react-icons/gi";
import { FaHome, FaThermometerHalf, FaBed, FaBath, FaClock, FaCalendarAlt } from 'react-icons/fa'; // Icons for yearBuilt, heating, bedrooms, bathrooms
import { LuCircleParking } from "react-icons/lu"; // Icon for parking
import { BsXDiamond } from "react-icons/bs"; // Icon for sqft
import { PiHeart } from "react-icons/pi";
import OfferCard from '@/components_Used/offerCard';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Welcome',
        href: '/welcome',
    },
];

interface House {
    id: number;
    title: string;
    image: string;
    address: string;
    price: string;
    yearBuilt: string;
    heating: string;
    bedrooms: string;
    bathrooms: string;
    parking: string;
    sqft: string;
}

const houses: House[] = [
    {
        id: 1,
        title: "Modern Villa",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        address: "123 Main St, Cityville 123 Main St, Cityville123 Main St, Cityville123 Main St, Cityville 123 Main St, Cityville123 Main St, Cityville",
        price: "$750,000",
        yearBuilt: "2015",
        heating: "Central air",
        bedrooms: "4 bedrooms",
        bathrooms: "3 bathrooms",
        parking: "3 Parking",
        sqft: "3,200 Sqft",
    },
    {
        id: 2,
        title: "Cozy Cottage",
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        address: "456 Oak Ave, Townsville",
        price: "$450,000",
        yearBuilt: "1990",
        heating: "Electric",
        bedrooms: "2 bedrooms",
        bathrooms: "2 bathrooms",
        parking: "1 Parking",
        sqft: "1,800 Sqft",
    },
    {
        id: 3,
        title: "Luxury Penthouse",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        address: "789 Elm St, Metropolis",
        price: "$1,200,000",
        yearBuilt: "2020",
        heating: "Radiant floor",
        bedrooms: "5 bedrooms",
        bathrooms: "4 bathrooms",
        parking: "2 Parking",
        sqft: "4,500 Sqft",
    },
    {
        id: 4,
        title: "Suburban Home",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        address: "101 Maple Dr, Suburbia",
        price: "$550,000",
        yearBuilt: "2005",
        heating: "Gas furnace",
        bedrooms: "3 bedrooms",
        bathrooms: "2 bathrooms",
        parking: "2 Parking",
        sqft: "2,600 Sqft",
    },
    {
        id: 5,
        title: "Cleveland Property",
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg", // Kept the original image URL
        address: "45606 Apple Street, Cleveland, OH",
        price: "$400,000",
        yearBuilt: "1954",
        heating: "Electric",
        bedrooms: "3 bedrooms",
        bathrooms: "2 bathrooms",
        parking: "2 Parking",
        sqft: "1400 Sqft",
    },
    {
        id: 6,
        title: "Cozy Cottage",
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        address: "456 Oak Ave, Townsville",
        price: "$450,000",
        yearBuilt: "1990",
        heating: "Electric",
        bedrooms: "2 bedrooms",
        bathrooms: "2 bathrooms",
        parking: "1 Parking",
        sqft: "1,800 Sqft",
    },
];
export default function Welcome() {
    //const { auth } = usePage<SharedData>().props;

    const properties = [
        {
            price: "$200,000",
            address: "6 plex 18903 Nottingham, Cleveland, OH, H1W 2P8V",
            income: "$3,800",
            cashflow: "$2k",
            cashflowAfter: "$3k",
            rehab: "75K",
            sqft: "5,580",
            lotSize: "1,120 Sqft",
            yearBuilt: "1958",
            rooms: "15 rooms",
            heating: "Forced air",
            bathrooms: "1 bathroom",
            parking: "2 Parking",
            bedrooms: "3 bedrooms",
            imageUrl: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
        },
        {
            price: "$350,000",
            address: "Villa 245 Sunny Lane, Miami, FL, 33101",
            income: "$5,200",
            cashflow: "$3.5k",
            cashflowAfter: "$4k",
            rehab: "50K",
            sqft: "3,200",
            lotSize: "2,000 Sqft",
            yearBuilt: "1975",
            rooms: "10 rooms",
            heating: "Central AC",
            bathrooms: "2 bathrooms",
            parking: "3 Parking",
            bedrooms: "4 bedrooms",
            imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
        },
        {
            price: "$180,000",
            address: "Duplex 78 Pine Street, Austin, TX, 78701",
            income: "$2,900",
            cashflow: "$1.8k",
            cashflowAfter: "$2.5k",
            rehab: "30K",
            sqft: "2,100",
            lotSize: "900 Sqft",
            yearBuilt: "1960",
            rooms: "8 rooms",
            heating: "Electric",
            bathrooms: "2 bathrooms",
            parking: "1 Parking",
            bedrooms: "2 bedrooms",
            imageUrl: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
        }
    ];


    const [auth, setAuth] = useState(false);
    // État pour l'index actuel
    const [currentIndex, setCurrentIndex] = useState(0);
    // État pour savoir si on glisse
    const [isDragging, setIsDragging] = useState(false);
    // État pour la direction du glisser
    const [dragDirection, setDragDirection] = useState(null);
    // Intervalle pour rotation auto
    const intervalSecondes = 5;

    // Rotation automatique, stoppée pendant le glisser
    useEffect(() => {
        if (isDragging) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % properties.length);
            setDragDirection('right');
        }, intervalSecondes * 1000);
        return () => clearInterval(timer);
    }, [properties.length, isDragging]);

    // Variantes d'animation selon la direction
    const variants = {
        enter: ({ direction }) => ({
            opacity: 0,
            x: direction === 'left' ? 100 : -100,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }),
        center: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        },
        exit: ({ direction }) => ({
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }),
    };

    // Variables pour suivre le glisser manuellement
    const [dragStartX, setDragStartX] = useState(null);
    const [dragOffsetX, setDragOffsetX] = useState(0);

    return (
        <>
            <Head title="Home" />
            <AppLayout breadcrumbs={breadcrumbs}>

                <div className="flex flex-col w-full gap-0">

                    <div className="container mx-auto px-0 lg:px-30">

                        <div className="purchasedRecentlyContainer bg-white">
                            {/* Conteneur interne avec overflow caché pour masquer les dépassements */}
                            <div className="purchasedRecentlyContainer bg-white">
                                <div
                                    className="purchasedRecently bg-[#f8f8f8] pt-3 flex flex-col items-center justify-center"
                                    style={{ overflow: 'hidden' }}
                                >
                                    <AnimatePresence mode="wait" custom={{ direction: dragDirection }}>
                                        <motion.div
                                            key={currentIndex}
                                            custom={{ direction: dragDirection }}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            drag="x" // Glisser horizontal uniquement
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={0.2}
                                            onDragStart={(e) => {
                                                setIsDragging(true);
                                                e.preventDefault(); // Empêche comportements indésirables
                                            }}
                                            onDrag={(event, info) => {
                                                setDragDirection(info.offset.x < 0 ? 'left' : 'right');
                                            }}
                                            onDragEnd={(event, info) => {
                                                setIsDragging(false);
                                                const swipeThreshold = 50;
                                                if (info.offset.x > swipeThreshold) {
                                                    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
                                                    setDragDirection('right');
                                                } else if (info.offset.x < -swipeThreshold) {
                                                    setCurrentIndex((prev) => (prev + 1) % properties.length);
                                                    setDragDirection('left');
                                                }
                                            }}
                                            style={{ width: '100%' }}
                                            // Supprime onPan et utilise dragPropagation pour permettre le scroll
                                            dragPropagation={true} // Laisse les événements de scroll passer
                                        >
                                            <PurchasedRecently {...properties[currentIndex]} />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="announcementContainer w-full mb-10">
                        <div className="bg-[#e5e1d6] py-10 text-center font-medium  text-gray-700 text-sm md:text-base">
                            <p className='text-[22px]'>
                                We started our Real Estate journey with <span className="font-semibold">$39,000</span>.
                                A few years later, we exceeded our goals with over <span className="font-semibold">100 doors</span>!
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto px-2 sm:px-4 lg:px-8">
                        {/* Two-Column Layout (Always Side-by-Side) */}
                        <div className="flex flex-row gap-2 sm:gap-4">
                            {/* Cards Column (Main Column) */}
                            <div className="flex-1">
                                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6">
                                    {houses.map((house) => (
                                        <OfferCard
                                            key={house.id}
                                            house={house}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar Column (Right Column) */}
                            <div className="w-10 sm:w-12 lg:w-10">
                                <div className="sidebarContainer bg-[#f8f8f8] p-2 shadow-lg h-full  flex flex-col items-center">
                                    <GiSettingsKnobs className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mb-4 border-1 transform rotate-90 cursor-pointer" />
                                </div>
                            </div>

                        </div>
                        <div className="seeMore flex justify-center mt-8">
                            <button className="cursor-pointer w-30 h-10 bg-[#b58f46] text-white text-xs sm:text-sm font-semibold py-2 rounded ">
                                see more
                            </button>
                        </div>

                    </div>
                    <div className="container mx-auto px-4 lg:px-20">
                        <div className="text-center text-2xl font-medium text-white mt-6">
                            OUR LATEST ARTICLE
                        </div>

                        <div className="grid md:gap-6 mt-6">
                            {/* First Row - Full Width */}
                            <div className="bg-white p-4 shadow-md flex mb-5">
                                <img
                                    src="https://harveykalles.com/wp-content/uploads/2020/03/iStock-502211716-scaled.jpg"
                                    alt="House for Sale"
                                    className="w-1/3 h-auto object-cover"
                                />
                                <div className="ml-6 flex flex-col justify-center">
                                    <h2 className="text-2xl font-bold mb-2">Buying your first house?</h2>
                                    <p className="text-gray-500 text-sm flex items-center">
                                        <FaHome className="mr-2" /> Selling
                                    </p>
                                    <p className="text-gray-600 mt-2 mb-2">
                                        Buying your first home is one of the most exciting and significant
                                        decisions you’ll ever make...
                                    </p>
                                    <p className="text-gray-400 text-xs mt-2 flex items-center mb-2">
                                        <FaClock className="mr-1" /> 7 Min Read <FaCalendarAlt className="ml-4 mr-1" /> 1 Jan 2025
                                    </p>
                                    <button className="mt-3 bg-[#b58f46] text-white px-4 py-2 rounded w-max cursor-pointer">
                                        KEEP READING
                                    </button>
                                </div>
                            </div>

                            {/* Second Row - Two Columns */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {["https://etimg.etb2bimg.com/photo/81211788.cms", "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2006/4/7/2/RE_Dos_Realtor_hor.jpg.rend.hgtvcom.1280.960.85.suffix/1400935880311.webp"].map((src, index) => (
                                    <div key={index} className="bg-white p-4 shadow-md flex">
                                        <img src={src} alt="House" className="w-1/3 h-80 object-cover" />
                                        <div className="ml-6 flex flex-col justify-center">
                                            <h2 className="font-bold text-2xl mb-2">Buying your first house?</h2>
                                            <p className="text-gray-500 text-sm flex items-center">
                                                <FaHome className="mr-2" /> Selling
                                            </p>
                                            <p className="text-gray-600 mt-2 mb-2">
                                                Buying your first home is one of the most exciting and significant
                                                decisions you’ll ever make...
                                            </p>
                                            <p className="text-gray-400 text-xs mt-2 flex items-center mb-2" >
                                                <FaClock className="mr-1" /> 7 Min Read <FaCalendarAlt className="ml-4 mr-1" /> 1 Jan 2025
                                            </p>
                                            <button className="mt-3 bg-[#b58f46] text-white px-4 py-2 rounded w-max cursor-pointer">
                                                KEEP READING
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                    <div className="sponsorColorContainer bg-[#f8f8f8] mt-10">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-20 bg-[#f8f8f8] mt-10">
                            <div className="sponsorContainer flex flex-wrap justify-center md:justify-between gap-4 md:gap-0">
                                <img
                                    src="https://cdn.discordapp.com/attachments/862057889840758806/1353915330552008794/image.png?ex=67e36369&is=67e211e9&hm=55fb40ae2fe0fb1dd8df2ab2e280d9d09704cdfc0389225166a14e276d758b9d&"
                                    alt=""
                                    className="h-96 lg:h-80 md:h-48 sm:h-32 object-contain w-full max-w-[384px] lg:max-w-[320px] md:max-w-[192px] sm:max-w-[128px]"
                                />
                                <img
                                    src="https://cdn.discordapp.com/attachments/862057889840758806/1353915368166653973/image.png?ex=67e36372&is=67e211f2&hm=ce89f82d22798059fe8522896505d43655edf0bf986fb6fdead188b4091fa7b2&"
                                    alt=""
                                    className="h-96 lg:h-80 md:h-48 sm:h-32 object-contain w-full max-w-[384px] lg:max-w-[320px] md:max-w-[192px] sm:max-w-[128px]"
                                />
                                <img
                                    src="https://cdn.discordapp.com/attachments/862057889840758806/1353915394548568189/image.png?ex=67e36378&is=67e211f8&hm=b96ddca1ae6ab0d454177f121b9fd890daa5f5a83acacd333a967b8b82aaa8c4&"
                                    alt=""
                                    className="h-96 lg:h-80 md:h-48 sm:h-32 object-contain w-full max-w-[384px] lg:max-w-[320px] md:max-w-[192px] sm:max-w-[128px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout >
        </>
    );
}