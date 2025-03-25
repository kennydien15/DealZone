import { Breadcrumbs } from '@/components/breadcrumbs';
import { Icon } from '@/components/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem, type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Menu, Search } from 'lucide-react';

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const getInitials = useInitials();

    return (
        <>
            <header className="" style={{ height: "6.5em", width: "100%", backgroundColor: "#202720", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="container" style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "3em" }}>
                    <div className="logo">
                        <Link href="/">
                            <img
                                src="https://media.discordapp.net/attachments/1351580729447944202/1352365219053306037/image-removebg-preview.png?ex=67e25d01&is=67e10b81&hm=40e862fb5db824772f136830f00ae53db73616f3ba3f9fa9b182e1a4327abc2a&=&format=webp&quality=lossless"
                                style={{ width: '80px' }}
                                alt="logo"
                            />
                        </Link>
                    </div>

                    <div className="headerText hidden md:block" style={{ width: "75%" }}>
                        <ul style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "space-around",
                            listStyle: "none",
                            width: "100%",
                            fontSize: "15px",
                            opacity: "0.8"
                        }}>
                            <li>
                                <Link className="hover:text-gray-400" href="/">Home</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-400" href="/buy">Buy</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-400" href="/sell">Sell</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-400" href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-400" href="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-400" href="/about">About Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="notifetprofil"
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src="https://media.discordapp.net/attachments/1351580729447944202/1352365351295254578/image-removebg-preview_1.png?ex=67e25d21&is=67e10ba1&hm=560b6113e68ecc6735f241ece1166a1dc41b2450ba49eaa1d1aed11cac351229&=&format=webp&quality=lossless"
                            alt="bell"
                            style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "contain",
                                display: "block"
                            }}
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                {auth.user ? (
                                    <Button variant="default" className="hover:cursor-pointer ml-8">
                                        <Avatar className="size-8 overflow-hidden rounded-full">
                                            <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                            <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                                {getInitials(auth.user.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                ) : (
                                    <Link
                                        href={route('login')}
                                        className="ml-8 text-white border-2 rounded-full flex items-center justify-center text-sm aspect-square w-14 h-14 md:w-16 md:h-16"
                                        style={{ borderColor: "#c2a45e", backgroundColor: "#404440" }}
                                    >
                                        LOG IN
                                    </Link>
                                )}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <UserMenuContent user={auth.user} />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu style={{ height: '32px', width: '32px', color: 'white' }} />
                                </Button>


                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="bg-[#202620] text-white w-[300px] flex flex-col shadow-lg border-l border-[#404440]"
                            >
                                <SheetHeader className="pt-6 pb-4 px-6 border-b border-[#404440]">
                                    <SheetTitle className="text-2xl font-semibold text-white tracking-wide">
                                        Menu
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex-1 py-6 px-4">
                                    <ul className="flex flex-col gap-3">
                                        <li>
                                            <Link
                                                href="/"
                                                className="block py-3 px-4 text-lg font-medium text-gray-200 rounded-lg hover:bg-[#404440] hover:text-[#c2a45e] transition-all duration-300 ease-in-out"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/buy"
                                                className="block py-3 px-4 text-lg font-medium text-gray-200 rounded-lg hover:bg-[#404440] hover:text-[#c2a45e] transition-all duration-300 ease-in-out"
                                            >
                                                Buy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/sell"
                                                className="block py-3 px-4 text-lg font-medium text-gray-200 rounded-lg hover:bg-[#404440] hover:text-[#c2a45e] transition-all duration-300 ease-in-out"
                                            >
                                                Sell
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog"
                                                className="block py-3 px-4 text-lg font-medium text-gray-200 rounded-lg hover:bg-[#404440] hover:text-[#c2a45e] transition-all duration-300 ease-in-out"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/contact"
                                                className="block py-3 px-4 text-lg font-medium text-gray-200 rounded-lg hover:bg-[#404440] hover:text-[#c2a45e] transition-all duration-300 ease-in-out"
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/about"
                                                className="block py-3 px-4 text-lg font-medium text-gray-200 rounded-lg hover:bg-[#404440] hover:text-[#c2a45e] transition-all duration-300 ease-in-out"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="px-6 py-4 border-t border-[#404440]">
                                    <p className="text-sm text-gray-400">
                                        © 2025 Your Website. All rights reserved.
                                    </p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>

            {breadcrumbs.length > 1 && (
                <div className="border-sidebar-border/70 flex w-full border-b">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}