// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Transition } from '@headlessui/react';
// import { useForm } from '@inertiajs/react';
// import { FormEventHandler, useRef } from 'react';

const UpdatePasswordForm = () => {
// export default function UpdatePasswordForm({
//     className = '',
// }: {
//     className?: string;
// }) {
    // const passwordInput = useRef<HTMLInputElement>(null);
    // const currentPasswordInput = useRef<HTMLInputElement>(null);

    // const {
    //     data,
    //     setData,
    //     errors,
    //     put,
    //     reset,
    //     processing,
    //     recentlySuccessful,
    // } = useForm({
    //     current_password: '',
    //     password: '',
    //     password_confirmation: '',
    // });

    // const updatePassword: FormEventHandler = (e) => {
    //     e.preventDefault();

    //     // put(route('password.update'), {
    //     //     preserveScroll: true,
    //     //     onSuccess: () => reset(),
    //     //     onError: (errors) => {
    //     //         if (errors.password) {
    //     //             reset('password', 'password_confirmation');
    //     //             passwordInput.current?.focus();
    //     //         }

    //     //         if (errors.current_password) {
    //     //             reset('current_password');
    //     //             currentPasswordInput.current?.focus();
    //     //         }
    //     //     },
    //     // });
    // };

    return (
        <section className="w-100">
        {/* <section className={className}> */}
            <header>
                <h2 className="h5 fw-bold text-dark">Update Password</h2>
                <p className="small text-muted mt-2">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            {/* <form onSubmit={updatePassword} className="mt-4">
                <div className="mb-3">
                    <InputLabel htmlFor="current_password" value="Current Password" />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        className="form-control mt-1"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.current_password} className="text-danger small mt-1" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password" value="New Password" />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="form-control mt-1"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="text-danger small mt-1" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        className="form-control mt-1"
                        autoComplete="new-password"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="text-danger small mt-1"
                    />
                </div>

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
export default UpdatePasswordForm;