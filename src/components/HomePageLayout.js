import { graphql } from 'gatsby';
import React from 'react';
import IconAL from '../images/courses/al.svg';
import IconCDI1 from '../images/courses/cdi1.svg';
import IconCDI2 from '../images/courses/cdi2.svg';
import IconFP from '../images/courses/fp.svg';
import IconIAC from '../images/courses/iac.svg';
import IconIAED from '../images/courses/iaed.svg';
import IconLP from '../images/courses/lp.svg';
import IconMD from '../images/courses/md.svg';
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
        <div className='year-section'>
          <h2>1º Ano</h2>
          <div>
            <div className='semester-section'>
              <h3>1º Semestre</h3>
              <SectionButtonLayout>
                <SectionButton name='CDI-I' link='/cdi-i' image={IconCDI1} color='#437AA1' />
                <SectionButton name='AL' link='/al' image={IconAL} color='#C48C31' />
                <SectionButton name='FP' link='/fp' image={IconFP} color='#CE733B' />
                <SectionButton name='IAC' link='/iac' image={IconIAC} color='#5CAD7D' />
              </SectionButtonLayout>
            </div>
            <div className='semester-section'>
              <h3>2º Semestre</h3>
              <SectionButtonLayout>
                <SectionButton name='CDI-II' link='/cdi-ii' image={IconCDI2} color='#44a1a0' />
                <SectionButton name='MD' link='/md' image={IconMD} color='#AD343E' />
                <SectionButton name='LP' link='/lp' image={IconLP} color='#13B95B' />
                <SectionButton name='IAED' link='/iaed' image={IconIAED} color='#D4910C' />
              </SectionButtonLayout>
            </div>
          </div>
        </div>
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
      }
    }
  }
`;
