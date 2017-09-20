import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/product-info">Transaction</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
  );
}
