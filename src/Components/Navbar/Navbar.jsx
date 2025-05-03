import './navbar.css';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // ✅ navigate imported
import { handleScroll } from './scroll';

function Navbar({ searchQuery, setSearchQuery }) {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ added navigate here

  const [active, setActive] = useState('nav');

  const showNav = () => setActive('nav activeNavbar');
  const removeNav = () => setActive('nav');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update searchQuery whenever user types in search input
  };

  return (
    <div className="navbarsection">
      <h2 style={{ fontWeight: "700", color: "#ff8000" }}>GARAM DHARAM</h2>

      <div className={active} id="box">
        <ul className="navitems">
          <li><a href="#home" onClick={(e) => handleScroll(e, 'home', location, navigate)}>Home</a></li>
          <li><a href="#aboutus" onClick={(e) => handleScroll(e, 'aboutus', location, navigate)}>About Us</a></li>
          <li><a href="#contactus" onClick={(e) => handleScroll(e, 'contactus', location, navigate)}>Contact Us</a></li>
          <li><Link to="/Feedback">Feedback</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
        </ul>

        <div className="closeNavbar hide" onClick={removeNav}>
          <i className="fa-solid fa-xmark icon"></i>
        </div>
      </div>

      {location.pathname === "/Menu" && (
      <form className="Searchbar">
        <i className="fa-solid fa-magnifying-glass search-icon" />
        <input type="search" placeholder="Search food" id="search" value={searchQuery} onChange={handleSearchChange}/>
      </form>
    )}

      <div className="bars hide" onClick={showNav}>
        <i className="fa-solid fa-bars icon"></i>
      </div>
    </div>
  );
}

export default Navbar;
