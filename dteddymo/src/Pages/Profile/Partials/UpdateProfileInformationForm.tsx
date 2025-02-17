// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Transition } from '@headlessui/react';
// import { Link, useForm, usePage } from '@inertiajs/react';
// import { FormEventHandler } from 'react';


const UpdateProfileInformation = () => {

// export default function UpdateProfileInformation({
//     mustVerifyEmail,
//     status,
//     className = '',
// }: {
//     mustVerifyEmail: boolean;
//     status?: string;
//     className?: string;
// }) {
    // const user = usePage().props.auth.user;

    // const { data, setData, patch, errors, processing, recentlySuccessful } =
    //     useForm({
    //         name: user.name,
    //         email: user.email,
    //     });

    // const submit: FormEventHandler = (e) => {
    //     e.preventDefault();

    //     // patch(route('profile.update'));
    // };

    return (
        <section className="w-100">
        {/* <section className={className}> */}
            <header>
                <h2 className="h5 fw-bold text-dark">
                    Profile Information
                </h2>
                <p className="mt-2 small text-muted">
                    Update your account's profile information and email address.
                </p>
            </header>
{/* 
            <form onSubmit={submit} className="mt-4">
                <div className="mb-3">
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="form-control mt-1"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-1 text-danger small" message={errors.name} />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="form-control mt-1"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-1 text-danger small" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="mb-3">
                        <p className="small text-muted">
                            Your email address is unverified.{' '}
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="btn btn-link p-0 small"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="small text-success">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="d-flex align-items-center gap-3">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="small text-muted">Saved.</p>
                    </Transition>
                </div>
            </form> */}
        </section>
    );
}

export default UpdateProfileInformation;