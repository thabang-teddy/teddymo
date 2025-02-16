import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, authProtectedRoutes, NonAuthRoutes } from "./Routes/Allroutes";
import AuthProtected from "./Routes/AuthProtected";
import AuthenticatedLayout from "./Layouts/AuthenticatedLayout";
import BlankMainLayout from "./Layouts/BlankMainLayout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { checklogin } from "./slices/Auth/Thunk";
import NonAuth from "./Routes/NonAuth";
import AlertComponent from "./Components/AlertComponent";

const App: React.FC = () => {
  // const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      dispatch(checklogin());
    }, []);
  
  return (
    <>
      <Routes>
        {publicRoutes?.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<NonAuth>{component}</NonAuth>} // Use NonAuthLayout for public pages
          />
        ))}
        
        {NonAuthRoutes?.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<NonAuth>{component}</NonAuth>} // Use NonAuthLayout for public pages
          />
        ))}

        {authProtectedRoutes?.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={
              <AuthProtected>{component}</AuthProtected>
            }
          />
        ))}
        
        {/* For error or unknown routes */}
        <Route
          path="*"
          element={<BlankMainLayout><h1>404 - Not Found</h1></BlankMainLayout>}
        />
      </Routes>
      <AlertComponent />
    </>
  );
};

export default App;
