import React from "react";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg shadow"
      // style={"background-color:"}
    >
      <div class="container">
        <div>
          <b class="navbar-brand">सौ. निकिता जाने-कुलकर्णी,</b>
          <p>
            मराठी कवयित्री, लेखिका, पक्षीशास्त्रज्ञ आणि जीवविज्ञान प्राध्यापिका
          </p>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav nav-underline w-100 d-flex justify-content-end align-content-center">
            <a href="#resume" className="nav-link text-dark">
              Resume
            </a>
            <a href="#projects" className="nav-link text-dark ">
              Projects
            </a>
            <a href="#contact" className="nav-link text-dark">
              Contact
            </a>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
