import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="bg-background flex min-h-200 flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-xl">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center ">
                        <Link href={route('home')} className="flex flex-col items-center gap-2 font-medium">
                            <div className="mb-1 flex h-29 w-29 items-center justify-center rounded-md">
                               <img className="" src="https://cdn.discordapp.com/attachments/1351580729447944202/1354080010863902840/logo-orange-removebg-preview.png?ex=67e3fcc8&is=67e2ab48&hm=580ff287041f0233665b6e81880b65a169a5d2018da1c47a20a8dd2b9cf33453&" alt="" />
                            </div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium">{title}</h1>
                            <p className="text-muted-foreground text-center text-sm">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
