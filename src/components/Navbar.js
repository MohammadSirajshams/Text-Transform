import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand btn btn-light">
        Text Transform
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon bg-light" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="btn btn-light" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="mx-2 dropdown-toggle btn btn-light"
            
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="mx-2 dropdown-menu">
            <li>
              <a className="dropdown-item" >
                Transform into UpperCase
              </a>
            </li>
            <li>
              <a className="dropdown-item">
              Transform into LowerCase
              </a>
            </li>
            {/* <li>
              <hr className="dropdown-divider" />
            </li> */}
            <li>
              <a className="dropdown-item" >
              Transform into CapitalizedForm
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}
