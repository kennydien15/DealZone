import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Contact',
        href: '/contact',
    },
];

export default function Contact() {
    return (
        <>
            <Head title="Contact">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className="container max-w-7xl mx-auto p-6">
                    <div className='pb-20'>
                        <h1 className="text-white text-center text-3xl font-bold mb-8">Contact</h1>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {/* Use .map() here for the contact cards */}
                            {[
                                { icon: <FaPhoneAlt />, title: 'Phone', info: '1 (555) 555-5555' },
                                { icon: <FaLocationDot />, title: 'Head Office', info: '11459 Mayfield Rd, STE 327, Cleveland OH 44106' },
                                { icon: <FaEnvelope />, title: 'Email', info: 'info@jkrealestatepartners.com' }
                            ].map((card, index) => (
                                <div key={index} className="bg-[#f8f8f8] p-6 text-center flex flex-col items-center border">
                                    <div className="text-amber-600 text-2xl mb-3">{card.icon}</div>
                                    <h3 className="font-bold mb-2">{card.title}</h3>
                                    <p className="text-gray-600">{card.info}</p>
                                </div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[#f8f8f8] p-8 border ">
                            <h2 className="text-center text-2xl font-bold mb-6">Contact us</h2>

                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="firstName" className="block font-bold mb-2">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Enter here..."
                                            className="w-full p-3 border border-gray-300"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block font-bold mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Enter here..."
                                            className="w-full p-3 border border-gray-300"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="email" className="block font-bold mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter here..."
                                            className="w-full p-3 border border-gray-300"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block font-bold mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter here..."
                                            className="w-full p-3 border border-gray-300"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block font-bold mb-2">Tell us how we can help!</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Enter here..."
                                        className="w-full p-3 border border-gray-300 h-40"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-amber-600 text-white font-bold py-3 px-10 uppercase block mx-auto hover:bg-amber-700 transition"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
};
