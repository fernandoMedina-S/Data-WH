import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../../util/Alert";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/profile");
    } catch (error) {
      toast.error("Error: cuenta no válida", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/graphs");
    } catch (error) {
      toast.error("Cuenta de Google no válida", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email)
      return toast.error("Error: Ingresa un correo válido", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    try {
      await resetPassword(user.email);
      toast.success("Se mandó un correo a la dirección solicitada", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Error: Ingresa un correo válido", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="login__layout">
      <form onSubmit={handleSubmit} className="login__main-container">
        <h2>Inicia Sesión</h2>
        
        <button onClick={handleGoogleSignin} className="login__google-button">
          Inicia con Google
        </button>
        <p className="login__register-text">
          ¿No tienes cuenta?
          <Link to="/register" className="text-blue-700 hover:text-blue-900">
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
