import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";

export const App = () => {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <Link to='/test'>test</Link>
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<h1>Test123</h1>} />
        </Routes>
      </AuthProvider>
    </div>
  );
};
