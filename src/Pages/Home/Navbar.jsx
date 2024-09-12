import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navAtive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navAtive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navAtive ? "acitive" : ""}`}>
      <div></div>
      <a
        className={`nav__hamburger ${navAtive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navAtive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navBar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              My Expertise
            </Link>
          </li>
          <li>
            {/* <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              My Expertise
            </Link> */}
          </li>
        </ul>
      </div>
      <a
        href="mailto:mdashiqueali71@gmail.com?subject=Inquiry&body=Hello,"
        className="btn btn-outline-primary"
        onClick={closeMenu}
      >
        Get In Touch
      </a>
    </nav>
  );
}
export default Navbar;
