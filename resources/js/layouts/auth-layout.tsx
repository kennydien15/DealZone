import { AppFooter } from '@/components_Used/app-footer';
import { AppHeader } from '@/components_Used/app-header';
import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <> 
        <AppHeader />
        <AuthLayoutTemplate title={title} description={description} {...props}>
            {children}
        </AuthLayoutTemplate>
        <AppFooter />
        </>
    );
}
