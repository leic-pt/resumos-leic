import { graphql } from 'gatsby';
import React from 'react';
import IstLogo from '../images/ist-logo.svg';
import '../styles/homepage.css';
import '../styles/main.css';
import '../styles/markdown.css';
import Navbar from './Navbar';
import PageMetadata from './PageMetadata';
import SectionButton, { SectionButtonLayout } from './SectionButton';

const HomePageLayout = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <div className='home-page-container'>
      <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />
      <Navbar />
      <div className='hero'>
        <img src={IstLogo} alt='Instituto Superior Técnico' width={150} />
        <h1>Resumos LEIC-A</h1>
        <p>Bem vindo ao site comunitário de resumos de LEIC-A.</p>
        <p>Aqui irás encontrar tudo o que precisas ao longo do semestre.</p>
      </div>
      <div style={{ marginTop: 50 }}>
        {page.frontmatter.years.map(({ name, semesters }) => (
          <div className='year-section' key={name}>
            <h2>{name}</h2>
            <div>
              {semesters.map(({ name, courses }) => (
                <div className='semester-section' key={name}>
                  <h3>{name}</h3>
                  <SectionButtonLayout>
                    {courses.map(({ name, description, link, image, color, long }) => (
                      <SectionButton
                        key={link}
                        name={name}
                        description={description}
                        link={link}
                        image={image?.dataURI}
                        color={color}
                        long={long}
                      />
                    ))}
                  </SectionButtonLayout>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='content' dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  );
};

export default HomePageLayout;

export const pageQuery = graphql`
  query HomePageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        years {
          name
          semesters {
            name
            courses {
              color
              description
              image {
                dataURI
              }
              name
              link
              long
            }
          }
        }
      }
    }
  }
`;
