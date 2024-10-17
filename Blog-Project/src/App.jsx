import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/auth";
import { login, logout } from "./redux/slices/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  });
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-200">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
