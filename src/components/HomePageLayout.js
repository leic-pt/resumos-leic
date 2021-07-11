import { graphql } from 'gatsby';
import React from 'react';
import AlgebraIcon from '../images/algebra.svg';
import CIcon from '../images/c.svg';
import CalculusIcon from '../images/calc-1.svg';
import CPUIcon from '../images/cpu.svg';
import GraphIcon from '../images/graph.svg';
import PythonIcon from '../images/python.svg';
import TreeGraphIcon from '../images/treeGraph.svg';
import '../styles/homepage.css';
import '../styles/main.css';
import '../styles/markdown.css';
import Navbar from './Navbar';
import PageMetadata from './PageMetadata';
import SectionButton, { SectionButtonLayout } from './SectionButton';
import { StaticImage } from 'gatsby-plugin-image';

const HomePageLayout = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <div className='home-page-container'>
      <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />
      <Navbar />
      <div className='hero'>
        <StaticImage src='../images/ist-logo.png' alt='Instituto Superior Técnico' width={150} />
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
                <SectionButton name='CDI-I' link='/cdi-i' image={CalculusIcon} color='#437AA1' />
                <SectionButton name='AL' link='/al' image={AlgebraIcon} color='#C48C31' />
                <SectionButton name='FP' link='/fp' image={PythonIcon} color='#CE733B' />
                <SectionButton name='IAC' link='/iac' image={CPUIcon} color='#5CAD7D' />
              </SectionButtonLayout>
            </div>
            <div className='semester-section'>
              <h3>2º Semestre</h3>
              <SectionButtonLayout>
                <SectionButton name='CDI-II' link='/cdi-ii' image={CalculusIcon} color='#44a1a0' />
                <SectionButton name='MD' link='/md' image={GraphIcon} color='#AD343E' />
                <SectionButton name='LP' link='/lp' image={TreeGraphIcon} color='#13B95B' />
                <SectionButton name='IAED' link='/iaed' image={CIcon} color='#D4910C' />
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
