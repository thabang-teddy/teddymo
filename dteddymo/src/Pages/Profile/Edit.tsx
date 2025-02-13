import { useState } from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

const ProfileEdit = () => {
  const [mustVerifyEmail, setMustVerifyEmail] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <AuthenticatedLayout header="Profile" title="Profile">
      <div className="py-5">
        <div className="container-lg">
          <div className="row gy-4">
            <div className="col-12 col-md-6 mx-auto">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <UpdateProfileInformationForm
                    // mustVerifyEmail={mustVerifyEmail}
                    // status={status}
                    // className="w-100"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mx-auto">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <UpdatePasswordForm/>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mx-auto">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <DeleteUserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};
export default ProfileEdit;
