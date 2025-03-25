import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/about',
    },
];

const teamMembers = [
    {
        name: 'Bonnie Green',
        position: 'Senior Front-end Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image: 'https://media.istockphoto.com/id/1335941248/fr/photo/plan-dun-beau-jeune-homme-debout-sur-un-fond-gris.jpg?s=612x612&w=0&k=20&c=YK04b0z7MLjvJ1V88YvIDn8F5B_LUMP9CTaj4ffm6V0=',
        socialLinks: [
            { href: '#', icon: <FaEnvelope /> },
            { href: '#', icon: <FaFacebook /> },
            { href: '#', icon: <FaTwitter /> },
            { href: '#', icon: <FaLinkedin /> },
        ],
    },
    {
        name: 'Thomas Lean',
        position: 'Senior Front-end Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
        socialLinks: [
            { href: '#', icon: <FaEnvelope /> },
            { href: '#', icon: <FaFacebook /> },
            { href: '#', icon: <FaTwitter /> },
            { href: '#', icon: <FaLinkedin /> },
        ],
    },
    {
        name: 'Jese Leos',
        position: 'Senior Front-end Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image: 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg',
        socialLinks: [
            { href: '#', icon: <FaEnvelope /> },
            { href: '#', icon: <FaFacebook /> },
            { href: '#', icon: <FaTwitter /> },
            { href: '#', icon: <FaLinkedin /> },
        ],
    },
    {
        name: 'Leslie Livingston',
        position: 'Senior Front-end Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image: 'https://img.freepik.com/free-photo/confident-good-looking-beautiful-woman-with-blonde-dyed-hair-dressed-casual-clothes-looking-seriously_176420-15186.jpg?semt=ais_hybrid',
        socialLinks: [
            { href: '#', icon: <FaEnvelope /> },
            { href: '#', icon: <FaFacebook /> },
            { href: '#', icon: <FaTwitter /> },
            { href: '#', icon: <FaLinkedin /> },
        ],
    },
];

export default function About() {
    return (
        <>
            <Head title="About">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className="container max-w-7xl mx-auto p-6">
                    {/* About Section */}
                    <div className='pb-20'>
                        <div className="bg-[#f8f8f8] mb-8 flex flex-col md:flex-row border">
                            <div className="p-8 md:w-1/2">
                                <h2 className="text-2xl font-bold mb-4">ABOUT</h2>
                                <p className="mb-4">Your One-Stop Shop for Off-Market, Cash-Flowing Deals in Cleveland, Ohio and Beyond!</p>
                                <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat pellentesque urna, at pharetra lectus tincidunt sed. Vestibulum elementum elit in metus portitor luctus.</p>
                                <a href="#" className="bg-amber-600 text-white py-2 px-6 inline-block uppercase font-bold hover:bg-amber-700 transition">Learn More</a>
                            </div>
                            <div className="md:w-1/2 h-64 md:h-auto bg-gray-300">
                                <img src="https://summitmoving.com/wp-content/uploads/2024/04/house-in-ohio-scaled.jpg" alt="House" className="h-full w-full object-cover" />
                            </div>
                        </div>

                        {/* Deal Zone Section */}
                        <div className="bg-[#f8f8f8] flex flex-col md:flex-row-reverse border">
                            <div className="p-8 md:w-1/2">
                                <h2 className="text-2xl font-bold mb-4">What is Deal Zone?</h2>
                                <p className="mb-6">Deal Zone is part of how we partner with investors, high-value end users, and contractors by providing them first-look access to our deeply discounted properties. When joining a restricted market, our real estate offers no arms-length purchases, no brokers, and direct access to deal processes made seamless.</p>
                                <a href="#" className="bg-amber-600 text-white py-2 px-6 inline-block uppercase font-bold hover:bg-amber-700 transition">Learn More</a>
                            </div>
                            <div className="md:w-1/2 h-64 md:h-auto bg-gray-300">
                                <img src="https://rockfordhomes.net/wp-content/uploads/2020/04/cta-new-home-designs.png" alt="House at sunset" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Meet Our Team Section */}
                    <div className="pb-20">
                        <div className="bg-[#f8f8f8] p-8 border">
                            <h2 className="text-black text-center text-3xl font-bold mb-8">Meet our team</h2>
                            <p className="text-black text-center mb-8">
                                At the Heart of Our Success Is a Group of Passionate and Dedicated Professionals Who Bring Their Expertise to Every Aspect of What We Do. From Real Estate Strategies to Market Analysts, Our Team Works Tirelessly to Ensure Your Investment Journey Is Seamless and Rewarding.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="bg-white p-6 text-center flex flex-col items-center shadow-lg">
                                        <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-amber-600 font-bold mb-1 text-lg">{member.name}</h3>
                                        <p className="text-gray-600 mb-2 text-sm">{member.position}</p>
                                        <p className="text-gray-600 mb-4 text-sm">{member.description}</p>
                                        <div className="flex space-x-3 text-gray-600">
                                            {member.socialLinks.map((link, idx) => (
                                                <a key={idx} href={link.href} className="hover:text-amber-600 text-lg">
                                                    {link.icon}
                                                </a>
                                            ))}
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
