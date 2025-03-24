//import { type SharedData } from '@/types';
import { Head, } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import PurchasedRecently from '@/components_Used/purshasedRecently';

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
}

const houses: House[] = [
    {
        id: 1,
        title: "Modern Villa",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        address: "123 Main St, Cityville",
        price: "$750,000",
    },
    {
        id: 2,
        title: "Cozy Cottage",
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        address: "456 Oak Ave, Townsville",
        price: "$450,000",
    },
    {
        id: 3,
        title: "Luxury Penthouse",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        address: "789 Elm St, Metropolis",
        price: "$1,200,000",
    },
    {
        id: 4,
        title: "Suburban Home",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        address: "101 Maple Dr, Suburbia",
        price: "$550,000",
    },
];

export default function Welcome() {
    //const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Home" />
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className="container mx-auto px-0 lg:px-30">
                    <div className="purchasedRecentlyContainer bg-white"  >
                        <div className="upperSection bg-white pt-3 flex flex-col items-center justify-center">
                            <PurchasedRecently
                                price="$200,000"
                                address="6 plex 18903 Nottingham, Cleveland, OH, H1W 2P8V"
                                income="$3,800/mo"
                                cashflow="$2k/mo → $3k/mo"
                                rehab="75K"
                                sqft="5,580"
                                lotSize="1,120 Sqft"
                                yearBuilt="1958"
                                rooms="15 rooms"
                                heating="Forced air" 
                                bathrooms="1 bathroom" 
                                parking="2 Parking"
                                bedrooms="3 bedrooms"
                                imageUrl="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" // Replace with your image URL
                            />
                        </div>
                        <div className="lowerSection">
                            <div className="rightSection">

                            </div>
                            <div className="leftSection">

                            </div>
                        </div>
                    </div>
                    <div className="announcementContainer">

                    </div>
                    <div className="articlesContainer">

                    </div>
                    <div className="latestArticleContainer">

                    </div>

                    <div className="sponsorsContainer">

                    </div>
                </div>
            </AppLayout>
        </>
    );
}
