import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';
import * as example from '../../store/modules/example/action';

export default function Login() {
  const dipatch = useDispatch();
  function handleClique(e) {
    e.preventDefault();

    dipatch(example.botaoClicadoRequest());
  }

  return (
    <Container>
      <Title>Pagina de Login</Title>
      <p>Lorem ipsum dolor sit amet.</p>

      <button onClick={handleClique} type="button">
        Enviar
      </button>
    </Container>
  );
}
