import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoLogoTableau } from "react-icons/io5"; // Updated import for Tableau icon

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-end py-6">
      <div className="m-8 flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/mykyta-kondratiev-4b4596200/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Mykytako/Projects" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:kondratiev.mikita@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://public.tableau.com/app/profile/mykyta.kondratiev/vizzes" target="_blank" rel="noopener noreferrer">
          <IoLogoTableau />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
