import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const botaoClicado = useSelector(
    (state) => state.exampleReducer.botaoClicado
  );

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/logout">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não Clicado'}
    </Nav>
  );
}
