import { Link } from '@inertiajs/react';

export function AppFooter() {
    return (

        <footer className="bg-black text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col text-center md:text-left space-y-2">
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                    <Link href="/buy" className="hover:text-gray-400">Buy</Link>
                    <Link href="/sell" className="hover:text-gray-400">Sell</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </div>

                <div className="flex flex-col text-center md:text-left space-y-2 mt-6 md:mt-0">
                    <Link href="/login" className="hover:text-gray-400">Log in</Link>
                    <Link href="/terms-of-use" className="hover:text-gray-400">Terms of use</Link>
                    <Link href="/privacy-policy" className="hover:text-gray-400">Confidentiality</Link>
                    <Link href="/accessibility" className="hover:text-gray-400">Accessibility</Link>
                </div>

                <div className="flex flex-col items-center mt-6 md:mt-0">
                    <img src="/logo.png" alt="Logo" className="w-20 mb-2" />
                    <p className="text-sm">© 2024 Deal Zone. Tous droits réservés.</p>
                    <p className="text-sm">
                        Réalisé par <a href="https://wintechnologie.ca" className="underline">wintechnologie.app</a>.
                    </p>
                </div>

                <div className="flex space-x-4 mt-6 md:mt-0">
                    <a href="#" className="hover:text-gray-400">
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <i className="fab fa-facebook text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}