//import { type SharedData } from '@/types';
import { Head,  } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';

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
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className=" w-full flex min-h-screen flex-col items-center ">

                    <div className="w-full  p-6  ">
                        <div className="container max-w-7xl mx-auto  p-6">
                            <h2 className="text-3xl font-bold mb-8 text-center">Houses for Sale</h2>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {houses.map((house) => (
                                    <div
                                        key={house.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
                                    >
                                        <img
                                            src={house.image}
                                            alt={house.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold">{house.title}</h3>
                                            <p className="text-gray-600">{house.address}</p>
                                            <p className="mt-2 font-bold">{house.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full  p-6 shadow-lg ">
                        <div className="container max-w-7xl mx-auto  p-6">
                            <h2 className="text-3xl font-bold mb-8 text-center">Houses for Rent</h2>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {houses.map((house) => (
                                    <div
                                        key={house.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
                                    >
                                        <img
                                            src={house.image}
                                            alt={house.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold">{house.title}</h3>
                                            <p className="text-gray-600">{house.address}</p>
                                            <p className="mt-2 font-bold">{house.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </AppLayout>
        </>
    );
}
