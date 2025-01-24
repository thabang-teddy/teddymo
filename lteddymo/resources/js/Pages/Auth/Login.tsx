import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import BlankMainLayout from '@/Layouts/BlankMainLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
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
        <BlankMainLayout>
            <Head title="Log in" />

            {status && (
                <div className="alert alert-success my-3" role="alert">
                    {status}
                </div>
            )}

            <div className='container w-100 vh-100 d-flex justify-content-around'>
            <form onSubmit={submit} className='' style={{width:"500px",margin:"auto"}}>
                <div className="mb-3">
                    <InputLabel htmlFor="email" value="Email" className="form-label" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="form-control"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="text-danger mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password" value="Password" className="form-label" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="form-control"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="text-danger mt-2" />
                </div>

                <div className="mb-3 form-check">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        className="form-check-input"
                        onChange={(e) => setData('remember', e.target.checked)}
                    />
                    <label htmlFor="remember" className="form-check-label">
                        Remember me
                    </label>
                </div>

                <div className="d-flex align-items-center justify-content-end">
                    {canResetPassword && (
                        <Link
                            href={"/"}
                            className="btn btn-link text-decoration-none"
                        >
                            Back to website
                        </Link>
                    )}

                    <PrimaryButton className="btn btn-primary ms-2" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
            </div>
        </BlankMainLayout>
    );
}
