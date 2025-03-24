import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Terms of Use',
        href: '/terms-of-use',
    },
];

export default function TermsOfUse() {
    return (
        <>
            <Head title="Terms of Use">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className="w-full flex min-h-screen flex-col items-center">
                    <div className="">
                        <div className="container max-w-7xl mx-auto  p-6">
                            <h1 className="text-4xl font-bold mb-6 text-center uppercase">Terms of Use</h1>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">Terms and Agreement</h2>
                                <p className="text-gray-700">
                                    Welcome to Deal Zone! [March 24, 2025] <br />
                                    By signing up and using our platform, you agree to comply with and be bound by the following terms and conditions. PLEASE read them carefully before proceeding.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
                                <p className="text-gray-700">
                                    Deal Zone (the "Platform") serves as a middleman facilitating connections between property sellers and buyers. We are not real estate agents or brokers and do not directly participate in property transactions nor do we guarantee the accuracy, quality, or legality of listings or transactions conducted through the Platform.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
                                <p className="text-gray-700">
                                    By registering an account, you confirm that:
                                </p>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>You are at least 18 years old or the age of majority in your jurisdiction.</li>
                                    <li>All information provided during registration is accurate and complete.</li>
                                    <li>You have the legal authority to enter into this agreement.</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                                <h3 className="text-xl font-medium mb-2">3.1 Sellers are responsible for:</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Ensuring that all property listings are accurate, complete, and lawful.</li>
                                    <li>Complying with applicable real estate regulations and laws in their jurisdiction.</li>
                                </ul>
                                <h3 className="text-xl font-medium mb-2 mt-4">3.2 Buyers are responsible for:</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Conducting due diligence before making any purchasing decisions.</li>
                                    <li>Ensuring the accuracy and authenticity of property listings.</li>
                                    <li>Not using the Platform for any illegal purpose.</li>
                                    <li>Refraining from any fraudulent, abusive, or unlawful activities.</li>
                                    <li>Respecting the intellectual property rights of Deal Zone and other users.</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">4. Role of Deal Zone</h2>
                                <p className="text-gray-700">
                                    Deal Zone acts solely as an intermediary and does not:
                                </p>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Represent buyers or sellers in transactions.</li>
                                    <li>Verify the accuracy of property listings or user-provided information.</li>
                                    <li>Provide warranties or guarantees regarding properties listed on the Platform.</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">5. Payment and Fees</h2>
                                <p className="text-gray-700">
                                    Include details about any fees the Platform charges, how payments are processed, and refund policies.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                                <p className="text-gray-700">
                                    Deal Zone is not liable for, and you agree to indemnify us against any claim or loss arising from:
                                </p>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Any disputes arising between buyers and sellers.</li>
                                    <li>Financial losses or damages resulting from property transactions conducted through the Platform.</li>
                                    <li>Termination of accounts in property listings.</li>
                                </ul>
                                <p className="text-gray-700">
                                    Deal Zone reserves the right to suspend or terminate user accounts for:
                                </p>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Engagement in fraudulent or abusive activities.</li>
                                    <li>Violations of applicable laws.</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">7. Privacy Policy</h2>
                                <p className="text-gray-700">
                                    Your use of the Platform is subject to our <a href="/privacy-policy" className="underline text-blue-600 hover:text-blue-800">Privacy Policy</a>, which explains how we collect, use, and protect your data.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
                                <p className="text-gray-700">
                                    This agreement is governed by the laws of the state of Ohio, USA, without regard to conflict of laws principles. Any disputes shall be resolved in the courts located in Cleveland, Ohio.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
                                <p className="text-gray-700">
                                    We will attempt to resolve any dispute arising out of or relating to this Agreement through good faith friendly negotiations. If the matter is not resolved by negotiation, we will attempt to resolve the dispute using the below Alternative Dispute Resolution (ADR) procedure.
                                </p>
                                <p className="text-gray-700">
                                    Any controversies or disputes arising out of or relating to this Agreement will be submitted to mediation in accordance with any statutory rules of mediation in the state of Ohio, USA. If mediation is not successful in resolving the entire dispute or is unavailable, any outstanding issues will be submitted to binding arbitration under the rules of the American Arbitration Association. The arbitrator's award will be final, and judgment may be entered upon it by any court having proper jurisdiction.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">10. Amendments</h2>
                                <p className="text-gray-700">
                                    Deal Zone reserves the right to update these terms at any time. Users will be notified of significant changes via email or on the Platform. Continued use of the Platform constitutes acceptance of the revised terms.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                                <p className="text-gray-700">
                                    If you have any questions or concerns about these terms, please contact us at:
                                </p>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Email: support@dealzone.com</li>
                                    <li>Phone: (555) 123-4567</li>
                                </ul>
                                <p className="text-gray-700 mt-2">
                                    By clicking "I Agree" during registration, you acknowledge that you have read, understood, and accept these terms and conditions.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-2xl font-semibold mb-4">Access to the Platform</h2>
                                <p className="text-gray-700">
                                    Access to our platform is free. We reserve the right to modify, suspend, or discontinue the platform, in whole or in part, without notice. We will not be liable if, for any reason, our platform is unavailable at any time or for any period. We strive to keep the platform accessible and functional at all times, but we cannot guarantee uninterrupted availability.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}