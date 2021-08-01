import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Navbar from '../components/Navbar';
import PageMetadata from '../components/PageMetadata';

const NotFoundPage = () => {
  return (
    <div>
      <PageMetadata title='Página Não Encontrada' />
      <Navbar />
      <div className='main-container'>
        <h1>404</h1>
        <p>Não existe a página que procuras...</p>
        <Link to='/'>Voltar à página inicial</Link>
        <div style={{ marginTop: '1rem' }}>
          <StaticImage src='../images/404.jpg' />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
