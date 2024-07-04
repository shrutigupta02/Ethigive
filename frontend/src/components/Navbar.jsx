import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

export default function Navbar() {
  const pages = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About Us", link: "/us" },
    { name: "Register", link: "/register" },
  ];
  const navigate = useNavigate();

  const redirect = (link) => {
    navigate(link);
  }

  return (
    <div className="app-bar">
      <div className="nav">
      {pages.map((page) => (
        <div
          className='nav-item'
          key={page.name}
          onClick={() => redirect(page.link)}
        >
          {page.name}
        </div>
      ))}
      </div>
      
    </div>
  );
}
