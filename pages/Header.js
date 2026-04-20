import { useState } from 'react';
import { Link } from 'react-router-dom';
import Searching from './Searching';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div>
      
      <header className="tstbite-header bg-white">
        <nav className="navbar navbar-expand-lg has-header-inner px-0">
       

          <Link className="navbar-brand" to="/">
            <img src="assets/images/brands/brand4.svg" style={{ maxWidth: "161px" }} alt="Tastebite" />
          </Link>
          <div className="tstbite-header-links d-flex align-items-center ml-auto order-0 order-lg-2">
            <Link className="search-link" to="/search-result" style={{ background: "none", border: "none" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="26.667" height="26.667" viewBox="0 0 26.667 26.667">
                <path d="M24.39,26.276l-4.9-4.9a12.012,12.012,0,1,1,1.885-1.885l4.9,4.9a1.334,1.334,0,0,1-1.886,1.886ZM2.666,12a9.329,9.329,0,0,0,15.827,6.7,1.338,1.338,0,0,1,.206-.206A9.332,9.332,0,1,0,2.666,12Z" />
              </svg>
            </Link>
          </div>
          <button className="navbar-toggler pr-0 ml-2 ml-md-3" type="button" data-toggle="collapse" data-target="#menu-4" aria-controls="menu-4" aria-expanded="false" aria-label="Toggle navigation">
            <svg data-name="Icon/Hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path data-name="Icon Color" d="M1.033,14a1.2,1.2,0,0,1-.409-.069.947.947,0,0,1-.337-.207,1.2,1.2,0,0,1-.216-.333,1.046,1.046,0,0,1-.072-.4A1.072,1.072,0,0,1,.072,12.6a.892.892,0,0,1,.216-.321.947.947,0,0,1,.337-.207A1.2,1.2,0,0,1,1.033,12H22.967a1.206,1.206,0,0,1,.409.069.935.935,0,0,1,.336.207.9.9,0,0,1,.217.321,1.072,1.072,0,0,1,.072.391,1.046,1.046,0,0,1-.072.4,1.206,1.206,0,0,1-.217.333.935.935,0,0,1-.336.207,1.206,1.206,0,0,1-.409.069Zm0-6a1.2,1.2,0,0,1-.409-.069.934.934,0,0,1-.337-.207,1.189,1.189,0,0,1-.216-.333A1.046,1.046,0,0,1,0,6.989,1.068,1.068,0,0,1,.072,6.6a.9.9,0,0,1,.216-.322.947.947,0,0,1,.337-.207A1.2,1.2,0,0,1,1.033,6H22.967a1.206,1.206,0,0,1,.409.068.935.935,0,0,1,.336.207.9.9,0,0,1,.217.322A1.068,1.068,0,0,1,24,6.989a1.046,1.046,0,0,1-.072.4,1.193,1.193,0,0,1-.217.333.923.923,0,0,1-.336.207A1.206,1.206,0,0,1,22.967,8Zm0-6a1.2,1.2,0,0,1-.409-.068.947.947,0,0,1-.337-.207,1.193,1.193,0,0,1-.216-.334A1.039,1.039,0,0,1,0,.988,1.068,1.068,0,0,1,.072.6.892.892,0,0,1,.288.276.934.934,0,0,1,.625.069,1.2,1.2,0,0,1,1.033,0H22.967a1.206,1.206,0,0,1,.409.069.923.923,0,0,1,.336.207A.9.9,0,0,1,23.928.6,1.068,1.068,0,0,1,24,.988a1.039,1.039,0,0,1-.072.4,1.2,1.2,0,0,1-.217.334.935.935,0,0,1-.336.207A1.206,1.206,0,0,1,22.967,2Z" transform="translate(0 5)" fill="#000"></path>
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="menu-4">
            <ul className="navbar-nav m-auto pt-3 pt-lg-0">
              <li className="nav-item ">
               
                <li className="nav-item">
                <Link className="nav-link" to="/">Home Page</Link>
              </li>
              </li>
              <li className="nav-item">
                
                <li className="nav-item">
                <Link className="nav-link" to="/recipe-full-width">Cake Recipe!</Link>
              </li>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" id="Admin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>Admin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9.333" height="5.333" viewBox="0 0 9.333 5.333">
                    <path d="M1.138.2A.667.667,0,0,0,.2,1.138l4,4a.667.667,0,0,0,.943,0l4-4A.667.667,0,1,0,8.2.2L4.667,3.724Z" />
                  </svg>
                </a>
                <div className="dropdown-menu" aria-labelledby="Admin">
                  <Link className="dropdown-item" to="recipes">RecipePage</Link>
                  <Link className="dropdown-item" to="/premium-users">User</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userpage">UserPage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fuserpage">TGang!</Link>
              </li>
            
            </ul>
          </div>
        </nav>
      </header>

    </div>
  )
}
export default Header;