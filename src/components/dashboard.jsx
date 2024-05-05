import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../css/currency.css";
function dashboard() {
  return (
    <div className="main_container">
      <div className="dash-sec1">
        <h1 className="main-text">Discover the World's Currencies</h1>
        <h2 className="main-text"> Explore, Exchange, Empower</h2>
      </div>
      <button>
        <Link to="/conversion">Convert Currency</Link>
      </button>
    </div>
  );
}

export default dashboard;
