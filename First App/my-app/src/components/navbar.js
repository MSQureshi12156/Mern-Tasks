import React from 'react';

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        {/* <!-- Company Logo --> */}
        <a class="navbar-brand" href="#">
          <img src="assets/logo.svg" alt="Logo" />
        </a>

        {/* <!-- collapsable Content --> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <!-- Browse --> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Browse
              </a>
              <ul
                class="dropdown-menu border-zero border-round"
                aria-labelledby="navbarDropdown"
              >
                {/* <!-- Todo: You need to add one level further dropdown --> */}
                <li><a href="#" class="dropdown-item">Web Development</a></li>
                <li><a href="#" class="dropdown-item">Design</a></li>
                <li><a href="#" class="dropdown-item">Mobile App </a></li>
                <li><a href="#" class="dropdown-item">IT Software </a></li>
                <li><a href="#" class="dropdown-item">Marketing </a></li>
                <li><a href="#" class="dropdown-item">Music </a></li>
                <li><a href="#" class="dropdown-item">Life Style </a></li>
                <li><a href="#" class="dropdown-item">Business </a></li>
                <li><a href="#" class="dropdown-item">Photography</a></li>
              </ul>
            </li>

            {/* <!-- Landings --> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Landings
              </a>
              <ul
                class="dropdown-menu border-zero border-round"
                aria-labelledby="navbarDropdown"
              >
                {/* <!-- Todo: You need to add one level further dropdown --> */}
                <h4
                  class="dropdown-header text-uppercase"
                  style={{color: "#64748b"}}
                >
                  Landings
                </h4>
                <li>
                  <a href="#" class="dropdown-item">
                    Home Academy
                    <button class="btn-purple">New</button>
                  </a>
                </li>
                <li><a href="#" class="dropdown-item">Courses</a></li>
                <li><a href="#" class="dropdown-item">Lead Course </a></li>
                <li><a href="#" class="dropdown-item">Request Access </a></li>
                <li><a href="#" class="dropdown-item">SaaS</a></li>
                <li>
                  <a href="#" class="dropdown-item">
                    Job Listing
                    <button class="btn-purple">New</button>
                  </a>
                </li>
              </ul>
            </li>

            {/* <!-- Pages --> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul
                class="dropdown-menu border-zero border-round"
                aria-labelledby="navbarDropdown"
              >
                {/* <!-- Todo: You need to add one level further dropdown --> */}
                <li><a href="#" class="dropdown-item">Courses</a></li>
                <li><a href="#" class="dropdown-item">Careers</a></li>
                <li><a href="#" class="dropdown-item">Paths</a></li>
                <li><a href="#" class="dropdown-item">Blog</a></li>
                <li><a href="#" class="dropdown-item">Career</a></li>
                <li>
                  <a href="#" class="dropdown-item"
                    >Job <button class="btn-purple">New</button></a
                  >
                </li>
                <li><a href="#" class="dropdown-item">Speciality</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a href="#" class="dropdown-item">About</a></li>
                <li><a href="#" class="dropdown-item">Help Center </a></li>
                <li><a href="#" class="dropdown-item">Pricing </a></li>
                <li><a href="#" class="dropdown-item">Compare Plan</a></li>
                <li><a href="#" class="dropdown-item">Contact</a></li>
              </ul>
            </li>

            {/* <!-- Accounts --> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accounts
              </a>
              <ul
                class="dropdown-menu border-zero border-round"
                aria-labelledby="navbarDropdown"
              >
                <h4
                  class="dropdown-header text-uppercase"
                  style={{ color: '#64748b' }}
                >
                  Accounts
                </h4>
                {/* <!-- Todo: You need to add one level further dropdown --> */}
                <li><a href="#" class="dropdown-item">Instructor</a></li>
                <li><a href="#" class="dropdown-item">Student</a></li>
                <li><a href="#" class="dropdown-item">Admin</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a href="#" class="dropdown-item">Sign In</a></li>
                <li><a href="#" class="dropdown-item">Sign Up</a></li>
                <li><a href="#" class="dropdown-item">Forgot Password</a></li>

                <li><a href="#" class="dropdown-item">Edit Profile</a></li>
                <li><a href="#" class="dropdown-item">Security</a></li>
                <li><a href="#" class="dropdown-item">Social Profile </a></li>
                <li><a href="#" class="dropdown-item">Social Profiles </a></li>
                <li><a href="#" class="dropdown-item">Notifications</a></li>
                <li><a href="#" class="dropdown-item">Delete Profiles</a></li>
                <li><a href="#" class="dropdown-item">Linked Accounts</a></li>
              </ul>
            </li>

            {/* <!-- Three Dots --> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle three-dots lh-1"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontWeight: "bold" }}
              >
                . . .
              </a>
              <ul
                class="dropdown-menu border-zero border-round"
                aria-labelledby="navbarDropdown"
              >
                {/* <!-- Todo: You need to add one level further dropdown --> */}
                <li>
                  <a href="#" class="dropdown-item">
                    <div class="d-flex">
                      <div class="dots-left">
                        <img
                          src="assets/icons/file-text.svg"
                          alt="###"
                          class="mx-2"
                        />
                      </div>
                      <div class="dots-right">
                        <h5>Documentations</h5>
                        <p class="fs-6">Browse the All Documentation</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    <div class="d-flex">
                      <div class="dots-left">
                        <img
                          src="assets/icons/layers.svg"
                          alt="###"
                          class="mx-2"
                        />
                      </div>
                      <div class="dots-right">
                        <h5 class="d-inline">Changelog</h5>
                        <span style={{ color: "#754ffe", fontWeight: '600' }}
                          >V2.0.1</span
                        >
                        <p class="fs-6">See What's New</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            {/* <!-- Search Form --> */}
            <form class="d-flex mx-2">
              <input
                class="form-control me-2 search-box"
                type="search"
                placeholder="Search Courses"
                aria-label="Search"
              />
            </form>
          </ul>
        </div>

        {/* <!-- Right Aligned Content --> */}
        <div class="d-flex">
          <div
            class="circle mx-1"
            style={{backgroundImage: "url('assets/sun.svg')" }}            
            ></div>
          <div
            class="circle mx-1"
            style={{backgroundImage: "url('assets/icons/bell.svg')" }}
          ></div>
          <div
            class="circle mx-1 cover"
            style={{backgroundImage: "url('assets/img/avatar-1.jpg')" }}
          ></div>
        </div>

        {/* <!-- Collapse Button With collapsable Content --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    
    </>
  );
}

export default Navbar;