import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/9744859?s=460&u=37e0a0f996bf1cc835794bce3aeaf74c7070adf3&v=4"
          alt="asFucuhara"
        />
        <div>
          <strong>Shindi Fucu</strong>
          <span>Garoto de Programa</span>
        </div>
      </header>
      <main>
        <p>Gênio Lindo e barato, melhor opção de todas</p>
        <br />
        <p>Gato de mais</p>
      </main>
      <footer>
        <p>
          Preço/hora
          <strong>10zaum</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whastapp" />
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
