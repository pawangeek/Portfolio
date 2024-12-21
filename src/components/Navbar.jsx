import { useState } from 'react';
import '../assets/navbar.css';
import '../assets/offcanvas.css';

const Navbar = () => {
  const [offCanvasActive, setOffCanvasActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleOffCanvas = () => {
    setOffCanvasActive(!offCanvasActive);
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const closeMobileMenu = () => {
    setMobileMenuActive(false);
  };

  return (
    <div className="container position-relative">
      <div className="position-relative">
        <nav className="navbar navbar-expand-lg navbar-home-2 flex-nowrap z-999 p-0 border border-1 rounded-3">
          <button
            className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex"
            onClick={toggleOffCanvas}
            aria-expanded={offCanvasActive}
          >
            <i className="ri-menu-2-line"></i>
          </button>
          <div className="container py-3 px-4">
            <a className="navbar-brand d-flex main-logo align-items-center">
              <span className="fs-4 ms-2">Pawan Jain</span>
            </a>
            <div className="d-none d-lg-flex">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="#about">About me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
              <div className="d-md-flex d-none gap-3">
                <a href="https://www.linkedin.com/in/pawan-jain/">
                  <i className="ri-linkedin-fill fs-18"></i>
                </a>
                <a href="https://github.com/pawangeek">
                  <i className="ri-github-fill fs-18"></i>
                </a>
                <a href="https://stackoverflow.com/users/15960341/pawan-jain">
                  <i className="ri-stack-overflow-fill fs-18"></i>
                </a>
                <a href="mailto:pawanjain.432@gmail.com">
                  <i className="ri-mail-add-fill fs-18"></i>
                </a>
              </div>
              <div
                className={ `burger-icon burger-icon-white border rounded-3 ${ mobileMenuActive ? 'burger-close' : '' }` }
                onClick={ toggleMobileMenu }
                aria-expanded={ mobileMenuActive }
              >
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* OffCanvas Info */ }
      <div className={ `offCanvas__info style-2 ${offCanvasActive ? 'active' : ''}`}>
        <div className="offCanvas__close-icon menu-close" onClick={toggleOffCanvas}>
          <button>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="offCanvas__logo mb-5">
          <h3 className="mb-0">Get in touch</h3>
        </div>
        <div className="offCanvas__side-info mb-30">
          <div className="contact-list mb-30">
            <p className="fs-6 fw-medium text-200 mb-5">
              Im always excited to take on new projects and collaborate with innovative minds.
            </p>
            <div className="mb-3">
              <span className="text-400 fs-5">Email</span>
              <p className="mb-0">pawanjain.432@gmail.com</p>
            </div>
            <div className="mb-3">
              <span className="text-400 fs-5">Github</span>
              <p className="mb-0">pawangeek</p>
            </div>
            <div className="mb-3">
              <span className="text-400 fs-5">Linkedin</span>
              <p className="mb-0">pawan-jain</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`offCanvas__overly ${offCanvasActive ? 'active' : ''}`}
        onClick={toggleOffCanvas}
      ></div>

      {/* Mobile Header */}
      <div
        className={`mobile-header-active mobile-header-wrapper-style ${mobileMenuActive ? 'sidebar-visible' : ''}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-logo">
            <a className="d-flex main-logo align-items-center d-inline-flex" href="index.html">
              <span className="fs-4 ms-2 text-dark">Pawan Jain</span>
            </a>
          </div>
          <div className="mobile-header-content-area">
            <div className="mobile-menu-wrap mobile-header-border">
              <nav>
                <ul className="mobile-menu font-heading ps-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#about" onClick={closeMobileMenu}>Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact" onClick={closeMobileMenu}>Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
