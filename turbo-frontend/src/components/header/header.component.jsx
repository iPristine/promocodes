import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.sass';

export function Header(props) {
  const {user} = props;
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">Turbo</div>
      </Link>
      {user && user.isAdmin && <Link to="/admin">ADMIN</Link>}
      <Link to="/login" className="header__user">
        LogIn
      </Link>
    </div>
  );
}
