import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./util/ProtectedRoute";
import Register from "./pages/Register/Register";
import Graphs from "./pages/Graphs/Graphs";
import Upload from "./pages/Upload/Upload";

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
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route
            path="/graphs"
            element={
              <ProtectedRoute>
                <Graphs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
