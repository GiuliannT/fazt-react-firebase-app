import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";

export const App = () => {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <Link to='/fazt-react-firebase-app/test'>test</Link>
      <Link to='/fazt-react-firebase-app/test2'>testHome</Link>
      <Link to='/fazt-react-firebase-app/test3'>testLogin</Link>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/fazt-react-firebase-app/login" element={<Login />} />
          <Route path="/fazt-react-firebase-app/register" element={<Register />} />
          <Route path="/fazt-react-firebase-app/test" element={<h1>Test123</h1>} />
          <Route path="/fazt-react-firebase-app/test2" element={<Home />} />
          <Route path="/fazt-react-firebase-app/test3" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};
