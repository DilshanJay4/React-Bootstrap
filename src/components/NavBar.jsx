import React from 'react'


const NavBar = () => {

  return (

        <nav className="navbar navbar-expand-sm bg-dark" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="/">Jay Blogs</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
  
  );
}

export default NavBar;
