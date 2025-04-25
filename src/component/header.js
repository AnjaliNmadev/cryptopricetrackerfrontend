import logo from "../cryptologo.png";
import { Link } from "react-router-dom";
function Header()
{
 return(
    <>
     <nav class="navbar navbar-expand-sm fixed-top navbar-dark bg-dark ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={logo} alt="logo" width="80px"/> CryptoPulse </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active"  to="/" >Home</Link>
        </li>
  
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" >
          Market Trends
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/">Bull Market</Link></li>
            <li><Link class="dropdown-item" to="/" >Bear Market</Link></li>
            <li><Link class="dropdown-item" to="/" >Sideways Market</Link></li>
            
            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" >
          Market Types
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/">Spot Market</Link></li>
            <li><Link class="dropdown-item" to="/" >Futures Market</Link></li>
            <li><Link class="dropdown-item" to="/" >Derivatives Market</Link></li>
            
            
          </ul>
        </li>
        
        <li class="nav-item ">
          <Link class="nav-link" role="button" to="/" >
          About us
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
 )
}

export default Header;
