import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="h4 fw-semibold text-dark">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-5">
                <div className="container-lg">
                    <div className="row gy-4">
                        <div className="col-12 col-md-6 mx-auto">
                            <div className="card shadow-sm border-0">
                                <div className="card-body">
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                        className="w-100"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mx-auto">
                            <div className="card shadow-sm border-0">
                                <div className="card-body">
                                    <UpdatePasswordForm className="w-100" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mx-auto">
                            <div className="card shadow-sm border-0">
                                <div className="card-body">
                                    <DeleteUserForm className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
