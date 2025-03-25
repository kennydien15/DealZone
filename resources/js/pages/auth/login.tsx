import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';


type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

const handleGoogleLogin = () => {

};

const handleFacebookLogin = () => {

};

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title="YOU MUST SIGN IN TO SEND FORM" description="Continue with your email adress or connect with google/facebook">
            <Head title="Log in" />
            <div className="flex gap-4 mb-6">
                <Button variant="outline" className="flex-1 bg-white border-gray-300 text-black shadow-sm">
                    <img src='https://img.icons8.com/?size=100&id=17949&format=png&color=000000' className="mr-2 h-5 w-5" /> Continue with Google
                </Button>
                <Button variant="outline" className="flex-1 bg-white border-gray-300 text-black shadow-sm">
                    <img src='https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000' className="mr-2 h-5 w-5" /> Continue with Facebook
                </Button>
            </div>
            <form className="flex flex-col gap-6" onSubmit={submit}>

                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <Checkbox
                                id="remember"
                                name="remember"
                                checked={data.remember}
                                onClick={() => setData('remember', !data.remember)}
                                tabIndex={3}
                            />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        {canResetPassword && (
                            <TextLink href={route('password.request')} className="text-sm" tabIndex={5}>
                                Forgot password?
                            </TextLink>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            className="mt-4 bg-[#b58f46] w-[210px] hover:bg-[#9e7d3d] text-white uppercase shadow-sm"
                            tabIndex={4}
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                            Continue with Email
                        </Button>
                    </div>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    Don't have an account?{' '}
                    <TextLink href={route('register')} tabIndex={5}>
                        Sign up
                    </TextLink>
                </div>
            </form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
        </AuthLayout>
    );
}
