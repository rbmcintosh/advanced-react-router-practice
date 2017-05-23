import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard 
          </Link>
          <Link to="/charts"> <i className="fa fa-fw fa-charts" />
            Charts 
          </Link>
          <Link to="/tables"> <i className="fa fa-fw fa-tables" />
            Tables 
          </Link>
          <Link to="/settings"> <i className="fa fa-fw fa-settings" />
            Settings 
          </Link>
          <Link to="/profiles"> <i className="fa fa-fw fa-profiles" />
            Profiles 
          </Link>
          <Link to="/marquee/iloveroutes"> <i className="fa fa-fw fa-marquee" />
            Marquee
          </Link>
          <Link to="/profile/:id"> <i className="fa fa-fw fa-profile" />
            Profile
          </Link>
          
        </li>
        <li>
          <a href="charts.html">
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </a>
        </li>
        <li>
          <a href="tables.html">
            <i className="fa fa-fw fa-table" /> Tables
          </a>
        </li>
      </ul>
    </div>);  
}

export default SideNav;
