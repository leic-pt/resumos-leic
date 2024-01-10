import { graphql } from 'gatsby';
import React, { useCallback } from 'react';
import IstLogo from '../images/ist-logo.svg';
import '../styles/homepage.css';
import '../styles/main.css';
import '../styles/markdown.css';
import Footer from './Footer';
import Navbar from './Navbar';
import PageMetadata from './PageMetadata';
import SectionButton, { SectionButtonLayout } from './SectionButton';
import Contributors from './Contributors';
import ExternalLink from './ExternalLink';

const HomePageLayout = ({ data }) => {
  const { markdownRemark: page, allContributor: contributors } = data;

  const getLabelName = useCallback(
    (label) => {
      if (label === 'meta') {
        return 'Meta';
      }
      const years = page.frontmatter.years;

      for (const year of years) {
        for (const semester of year.semesters) {
          for (const course of semester.courses) {
            if (course.link === `/${label}`) {
              return course.name;
            }
          }
        }
      }
      return null;
    },
    [page.frontmatter.years]
  );

  return (
    <div className='home-page-container'>
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
      <div className='content'>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
        <Contributors getLabelName={getLabelName} contributors={contributors.nodes} />
        <hr />
        <div className='custom-container custom-container-warning'>
          <p>Disclaimer</p>
          <p>
            Resumos LEIC não está afiliado ao
            <ExternalLink href='https://tecnico.ulisboa.pt'>tecnico.ulisboa.pt</ExternalLink> de
            forma alguma. Todo o conteúdo escrito disponível neste site é dado por contribuidores
            (listados acima). Alguns anexos podem ter sido cedidos por professores, após obter a
            respetiva permissão.
            <br />
            Visto que algum do conteúdo pode estar incorreto, incompleto e/ou desatualizado, usa
            este site <em>at your own risk</em>.<br />
            Como sempre, se encontrares algum erro, podes e deves{' '}
            <ExternalLink href='https://docs.leic.pt'>contribuir</ExternalLink>!
          </p>
          <p>
            Questões relacionadas com <em>copyright</em> deverão ser encaminhadas para{' '}
            <ExternalLink href='mailto:resumos@leic.pt'>resumos@leic.pt</ExternalLink>.
          </p>
        </div>
      </div>
      <Footer />
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
    allContributor {
      nodes {
        username
        name
        labels
        additionalLabels
        boldLabels
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { markdownRemark: page } = data;
  return <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />;
};
