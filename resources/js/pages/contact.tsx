import { Head, } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';

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
                <div className="container max-w-7xl mx-auto  p-6">
                    <div className='pb-20'>


                        <h1 className="text-white text-center text-3xl font-bold mb-8">Contact</h1>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 ">
                            <div className="bg-white p-6 text-center flex flex-col items-center border">
                                <div className="text-amber-600 text-2xl mb-3 ">📞</div>
                                <h3 className="font-bold mb-2">Phone</h3>
                                <p className="text-gray-600">1 (555) 555-5555</p>
                            </div>

                            <div className="bg-white p-6 text-center flex flex-col items-center border">
                                <div className="text-amber-600 text-2xl mb-3">🏢</div>
                                <h3 className="font-bold mb-2">Head Office</h3>
                                <p className="text-gray-600">11459 Mayfield Rd, STE 327, Cleveland OH 44106</p>
                            </div>

                            <div className="bg-white p-6 text-center flex flex-col items-center border">
                                <div className="text-amber-600 text-2xl mb-3">📧</div>
                                <h3 className="font-bold mb-2">Email</h3>
                                <p className="text-gray-600">info@jkrealestatepartners.com</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8  border">
                            <h2 className="text-center text-2xl font-bold mb-6">Contact us</h2>

                            <form >
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


                    {/* About Section */}
                    <div className='pb-20'>


                        <div className="bg-white mb-8 flex flex-col md:flex-row border">
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
                        <div className="bg-white flex flex-col md:flex-row-reverse border">
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
                        <div className='p-8 border'>

                            <h2 className="text-black text-center text-3xl font-bold mb-8">Meet our team</h2>
                            <p className="text-black text-center mb-8">
                                We are the Off-Market Deal Sourcing Experts in Cleveland, Ohio and Beyond! Committed to Excellence in Every Aspect of What We Do, From Real Estate Strategies to Market Analysis, Our Team Will Help You Navigate Your Investment Journey to Success and Beyond!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {/* Team Member 1 */}
                                <div className="bg-white p-6 text-center flex flex-col items-center border">
                                    <div className="w-60 h-42 bg-gray-300 mb-4">

                                        <img src="https://media.istockphoto.com/id/1335941248/fr/photo/plan-dun-beau-jeune-homme-debout-sur-un-fond-gris.jpg?s=612x612&w=0&k=20&c=YK04b0z7MLjvJ1V88YvIDn8F5B_LUMP9CTaj4ffm6V0=" alt="Bonnie Green" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-amber-600 font-bold mb-1">Bonnie Green</h3>
                                    <p className="text-gray-600 mb-2">Senior Front-end Developer</p>
                                    <p className="text-gray-600 mb-4">Connecting and adapting to new challenges, I ensure our team stays ahead.</p>
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-gray-600 hover:text-amber-600">📧</a>
                                        <a href="#" className="text-gray-600 hover:text-amber-600">💬</a>
                                        <a href="#" className="text-gray-600 hover:text-amber-600">📞</a>
                                    </div>
                                </div>

                                {/* Team Member 2 */}
                                <div className="bg-white p-6 text-center flex flex-col items-center border">
                                    <div className="w-60 h-42 bg-gray-300  mb-4">
                                        <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="Thomas Lean" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-amber-600 font-bold mb-1">Thomas Lean</h3>
                                    <p className="text-gray-600 mb-2">Senior Front-end Developer</p>
                                    <p className="text-gray-600 mb-4">Connecting and adapting to new challenges, I ensure our team stays ahead.</p>
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-gray-600 hover:text-amber-600 w-5"><img src="https://cdn-icons-png.flaticon.com/256/59/59439.png" alt="" /></a>
                                        <a href="#" className="text-gray-600 hover:text-amber-600 w-9"><img src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Log%D0%BE.png" alt="" /></a>
                                        <a href="#" className="text-gray-600 hover:text-amber-600 w-5"><img src="https://www.shareicon.net/download/2015/09/21/644005_ball_512x512.png" alt="" /></a>
                                    </div>
                                </div>

                                {/* Team Member 3 */}
                                <div className="bg-white p-6 text-center flex flex-col items-center border">
                                    <div className="w-60 h-42 bg-gray-300  mb-4">
                                        <img src="https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg" alt="Jese Leos" className="w-full h-full  object-cover" />
                                    </div>
                                    <h3 className="text-amber-600 font-bold mb-1">Jese Leos</h3>
                                    <p className="text-gray-600 mb-2">Senior Front-end Developer</p>
                                    <p className="text-gray-600 mb-4">Connecting and adapting to new challenges, I ensure our team stays ahead.</p>
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-gray-600 hover:text-amber-600 w-5"><img src="https://cdn-icons-png.flaticon.com/256/59/59439.png" alt="" /></a>
                                        <a href="#" className="text-gray-600 hover:text-amber-600 w-9"><img src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Log%D0%BE.png" alt="" /></a>
                                        <a href="#" className="text-gray-600 hover:text-amber-600 w-5"><img src="https://www.shareicon.net/download/2015/09/21/644005_ball_512x512.png" alt="" /></a>
                                    </div>
                                </div>

                                {/* Team Member 4 */}
                                <div className="bg-white p-6 text-center flex flex-col items-center border">
                                    <div className="w-60 h-42 bg-gray-300  mb-4">
                                        <img src="https://img.freepik.com/free-photo/confident-good-looking-beautiful-woman-with-blonde-dyed-hair-dressed-casual-clothes-looking-seriously_176420-15186.jpg?semt=ais_hybrid" alt="Leslie Livingston" className="w-full h-full  object-cover" />
                                    </div>
                                    <h3 className="text-amber-600 font-bold mb-1">Leslie Livingston</h3>
                                    <p className="text-gray-600 mb-2">Senior Front-end Developer</p>
                                    <p className="text-gray-600 mb-4">Connecting and adapting to new challenges, I ensure our team stays ahead.</p>
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-gray-600 hover:text-amber-600 w-5"><img src="https://cdn-icons-png.flaticon.com/256/59/59439.png" alt="" /></a>
                                        <a href="#" className="text-gray-600 hover:text-amber-600 w-9"><img src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Log%D0%BE.png" alt="" /></a>
                                        <a href="#" className="text-gray-600 hover:text-amber-600 w-5"><img src="https://www.shareicon.net/download/2015/09/21/644005_ball_512x512.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </AppLayout>
        </>
    );
};

