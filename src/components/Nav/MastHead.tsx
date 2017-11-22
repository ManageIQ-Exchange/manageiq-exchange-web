import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const pfLogo = require('../../img/logo-alt.svg');
const pfBrand = require('../../img/brand-alt.svg');

interface Props {}

export const MastHead: React.StatelessComponent<Props> = props => {
  return (
    <Navbar fluid collapseOnSelect className="navbar navbar-pf-vertical">
      <Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Brand>
          <Link to="/">
            <img className="navbar-brand-icon" src={pfLogo} alt="" />
            <img
              className="navbar-brand-name"
              src={pfBrand}
              alt="PatternFly Enterprise Application"
            />
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>         
          <li className="dropdown">
            <a
              className="dropdown-toggle nav-item-iconic"
            > <button className="btn btn-primary" type="button">
              Login GitHub <span title="Login GitHub" className="fa pficon-key" />
              </button>
            </a>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
