import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

  return (
    <nav className="links">
      <button className="navigation__link" onClick={() => navigate(-1)}>
        Atrás
      </button>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Productos</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/my-account">My Account</NavLink>
      <button className="navigation__link" onClick={() => navigate(1)}>
        Adelante
      </button>
    </nav>
  );
};
export default Header;
