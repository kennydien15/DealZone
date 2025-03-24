import { Breadcrumbs } from '@/components/breadcrumbs';
import { Icon } from '@/components/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
            <header className="bg-zinc-800" style={{ paddingLeft: '300px', paddingRight: '300px' }}>
                <div className='flex' style={{ padding: '1rem 2rem' }}>

                    <div style={{}}>
                        <img src="https://cdn.discordapp.com/attachments/1351580729447944202/1352365219053306037/image-removebg-preview.png?ex=67de6881&is=67dd1701&hm=11ccfd9b494043ea6d5f1e755d2d50f5356bd1c699c80728205525f06f8fcd70&" style={{ width: '80px' }} alt="logo" />

                    </div>
                    <div style={{ color: 'white', justifyContent: 'space-between', display: 'flex', alignItems: 'center', width: '100%', paddingLeft: '80px', paddingRight: '80px' }} >
                        <Link href="/dashboard" className='text-white hover:text-gray-300 transition'>Home</Link>
                        <Link href="#" className='text-white hover:text-gray-300 transition'>Buy</Link>
                        <Link href="#" className='text-white hover:text-gray-300 transition'>Sell</Link>
                        <Link href="#" className='text-white hover:text-gray-300 transition'>Blog</Link>
                        <Link href="#" className='text-white hover:text-gray-300 transition'>Contact</Link>
                    </div>
                    <div className='flex' style={{ alignItems: 'center' }}>
                        <img src="https://cdn.discordapp.com/attachments/1351580729447944202/1352365351295254578/image-removebg-preview_1.png?ex=67de68a1&is=67dd1721&hm=13ab3f268ebbb2eb88553212c03053a098b956f2174dc0a5d3ef13778a8ad831&" style={{ width: '30px' }} className="hover:cursor-pointer" alt="bell" />
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
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="hover:cursor-pointer ml-8 text-white hover:text-gray-300 transition border-white border-2 px-2 py-1 rounded-md"
                                        >
                                            Login
                                        </Link>

                                    </>
                                )}


                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <UserMenuContent user={auth.user} />
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </header>

            {/* si jamais on veut une imageavec un search bar
            
            
                <div
                    className="w-full h-[400px] overflow-hidden"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1547916721-7469af15e2a3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xldmVsYW5kJTIwb2hpb3xlbnwwfHwwfHx8MA%3D%3D)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div>

                    </div>
                    <div className="flex justify-center items-center h-full flex-col text-center">
                        <h1 className="text-white text-4xl font-bold mb-10  text-5xl line-height: 2.5rem drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Search among <span className="underline hover:underline cursor-pointer hover:text-gray-200">70 000</span> properties
                        </h1>
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute left-3 top-3 text-gray-500">
                                <Search className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            */}

            



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
