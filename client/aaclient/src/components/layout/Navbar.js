import React,{Fragment} from 'react';
import {Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import PropTypes from 'prop-types';

 const Navbar = ({auth:{isAuthenticated,loading},logout}) => {
    const authLinks = ( 
	  <ul className="navbar-nav ml-auto">
	  <li className=""><a className="nav-link" href="profiles.html">Contractor</a> </li> 
	  <li className=""> <a className="nav-link" href="/dashboard"><i className="fa fa-user dash" aria-hidden="true"></i>Dashboard</a></li>
	  <li className=""><a className="nav-link" href="/login" onClick={logout}>Logout</a></li>
	  </ul> 
      );
  
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
  




    return (
        <nav className="navbar bg-dark">
        <h1>
        <Link to="/"> JOBTheBid</Link>
        </h1>
    {/*<p>ajeet {isAuthenticated}</p> */}
    
    {!loading &&(<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

Navbar.propTypes = {
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
  }
const mapStateToProps= state =>({
    auth:state.auth
  })
export default connect(mapStateToProps,{logout})(Navbar);