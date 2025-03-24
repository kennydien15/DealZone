export function AppFooter() {
    return (

        <footer className="bg-black text-gray-300 py-8">
            <div className="container max-w-7xl mx-auto  p-6">

                <div>




                    <div className="flex flex-col md:flex-row justify-between items-center mx-auto px-4 md:px-8 mt-6">

                        <div className="flex flex-col text-center md:text-left space-y-2 pr-27">
                            <a href="#" className="hover:text-gray-400">Home</a>
                            <a href="#" className="hover:text-gray-400">Buy</a>
                            <a href="#" className="hover:text-gray-400">Sell</a>
                            <a href="#" className="hover:text-gray-400">Contact</a>
                        </div>


                        <div className="flex flex-col text-center md:text-left space-y-2 mt-6 md:mt-0">
                            <a href="#" className="hover:text-gray-400">Log in</a>
                            <a href="#" className="hover:text-gray-400">Terms of use</a>
                            <a href="#" className="hover:text-gray-400">Confidentiality</a>
                            <a href="#" className="hover:text-gray-400">Accessibility</a>
                        </div>


                        <div className="flex flex-col items-center mt-6 md:mt-0 w-40">
                            <img src="https://cdn.discordapp.com/attachments/1351580729447944202/1353734096462938183/K-removebg-preview.png?ex=67e2ba9f&is=67e1691f&hm=588eed1cb3ef1129bed670375561db75577f8b460c02902eb62ab55ee7ae9adf&" alt="Logo" />

                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mx-auto px-4 md:px-8 mt-6 pt-10">



                        <div className="">
                            <p className="text-xs">© 2024 Deal Zone. Tous droits réservés.</p>
                        </div>

                        <div className="flex space-x-4 mt-6 md:mt-0">
                            <a href="#" className="hover:text-gray-400 w-10">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />

                            </a>
                            <a href="#" className="hover:text-gray-400 w-10">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="" />

                            </a>
                            <a href="#" className="hover:text-gray-400 w-10">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" />

                            </a>
                        </div>

                        <div>
                            <p className="text-xs">
                                Réalisé par <a href="https://wintechnologie.ca" className="underline">wintechnologie.ca</a>.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    );
}