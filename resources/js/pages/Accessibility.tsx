import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Accessibility',
        href: '/accessibility',
    },
];

export default function Accessibility() {
    return (
        <>
            <Head title="Accessibility">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className="w-full flex min-h-screen flex-col items-center">
                    <div className="w-full p-6">
                        <div className="container max-w-7xl mx-auto p-6">
                            <h1 className="text-4xl font-bold mb-6 text-center uppercase">Accessibility</h1>

                            <section className="mb-6">
                                <p className="text-gray-700">
                                    At Deal Zone, we are committed to making our platform accessible to all users, including those with disabilities. We strive to ensure that the site complies with accessibility standards and offers an inclusive user experience.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                    <li>
                                        <strong>Compliance with Standards:</strong>
                                        <p className="ml-6">
                                            We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, and follow industry best practices to ensure the accessibility of our platform.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Inclusive Design:</strong>
                                        <p className="ml-6">
                                            We incorporate inclusive design principles from the early stages of our site development. This includes using readable fonts, contrasting colors, and layouts adapted for users of assistive technologies.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Assistive Technology Compatibility:</strong>
                                        <p className="ml-6">
                                            Our site is designed to be compatible with commonly used assistive technologies, such as screen readers, voice control devices, and alternative keyboards.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Accessible Multimedia Content:</strong>
                                        <p className="ml-6">
                                            We ensure that all multimedia content, including images, videos, and audio files, are accompanied by text descriptions, captions, and transcripts where possible.
                                        </p>
                                    </li>
                                </ol>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">Support and Feedback</h2>
                                <p className="text-gray-700">
                                    We value your feedback on the accessibility of our platform. If you encounter any difficulties or have suggestions for improving the accessibility of our site, please let us know. Your feedback is valuable and helps us continuously improve our service.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">Response Process</h2>
                                <p className="text-gray-700">
                                    We are committed to responding to all accessibility support requests as promptly as possible. If you encounter a specific issue, we encourage you to provide as much detail as possible to help us identify and resolve the situation effectively.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">Changes to Our Accessibility Policy</h2>
                                <p className="text-gray-700">
                                    We reserve the right to update our accessibility policy at any time. Any changes will be posted on this page with a revised update date. We encourage you to review this page regularly to stay informed about our commitment to accessibility.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">Last Updated: June 17, 2024</h2>
                                <p className="text-gray-700">
                                    By using our platform, you acknowledge our commitment to providing an accessible experience for all. Thank you for your trust and understanding.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}