import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, authProtectedRoutes } from "./Routes/Allroutes";
import AuthProtected from "./Routes/AuthProtected";
import AuthenticatedLayout from "./Layouts/AuthenticatedLayout";
import BlankMainLayout from "./Layouts/BlankMainLayout";

const App: React.FC = () => {
  // const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      {publicRoutes.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          element={<BlankMainLayout>{component}</BlankMainLayout>} // Use NonAuthLayout for public pages
        />
      ))}

      {authProtectedRoutes.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          element={
            <AuthProtected>
              <AuthenticatedLayout>{component}</AuthenticatedLayout>
            </AuthProtected>
          }
        />
      ))}
      
      {/* For error or unknown routes */}
      <Route
        path="*"
        element={<BlankMainLayout><h1>404 - Not Found</h1></BlankMainLayout>}
      />
    </Routes>
  );
};

export default App;
