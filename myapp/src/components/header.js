import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


function Navbar() {

  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Logo</Link>
          <button class={`navbar-toggler  ${currentPath == "/view" ? "d-none" : ""}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={`offcanvas offcanvas-end ${currentPath == "/view" ? "d-none" : ""}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <span data-bs-dismiss="offcanvas">
                    <a class="nav-link active" href="#gallery">Gallery</a>
                  </span>
                </li>
                <li class="nav-item">
                  <span data-bs-dismiss="offcanvas">
                    <a class="nav-link active" href="#contact">Contact</a>
                  </span>
                </li>
                <li class="nav-item">
                  <span data-bs-dismiss="offcanvas">
                    <NavLink class="nav-link active" to="/view">view</NavLink>
                  </span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
      <script>
        {/* <script>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    const targetElement = document.querySelector(target);
    window.scroll({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});
</script> */}
        {/*  <script>
    var video = document.getElementById("myVideo");
    video.playbackRate = 0.3; // Set playback rate to 0.5 for slow motion (half speed)
</script>  */}
      </script>
    </>
  );
}

export default Navbar;


