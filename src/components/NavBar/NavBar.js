import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import isAdmin from "../../util/users";

const NavBar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const admin = user ? isAdmin(user.uid) : null;
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <nav>
        <ul className="navbar__main-list">
          <Link to="/">
            <li className="navbar__logo">Almacenes de datos - Interfaz</li>
          </Link>
          <li className="navbar__item-container">
            {!user && (
              <Link to="/login">
                <a className="navbar__list-item">Login</a>
              </Link>
            )}
            {user && admin && (
              <>
              <Link to="/graphs">
                  <a className="navbar__list-item">
                    Gráficas
                  </a>
                </Link>
              <Link to="/upload">
                  <a className="navbar__list-item">
                    Consulta nueva
                  </a>
                </Link>
                <Link to="/login">
                  <a className="navbar__list-item" onClick={handleLogout}>
                    Salir
                  </a>
                </Link>
              </>
            )}
            {user && !admin && (
              <>
              <Link to="/graphs">
                  <a className="navbar__list-item">
                    Gráficas
                  </a>
                </Link>
                <Link to="/login">
                  <a className="navbar__list-item" onClick={handleLogout}>
                    Salir
                  </a>
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
