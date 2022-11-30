import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./util/ProtectedRoute";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/check"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
