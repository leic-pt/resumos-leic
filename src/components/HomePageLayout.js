import React from 'react';
import { graphql } from 'gatsby';
import SectionButton, { SectionButtonLayout } from './SectionButton';

import '../styles/main.css';
import '../styles/markdown.css';
import '../styles/homepage.css';

import CalculusIcon from '../images/calc-1.svg';
import AlgebraIcon from '../images/algebra.svg';
import GraphIcon from '../images/graph.svg';
import TreeGraphIcon from '../images/treeGraph.svg';
import CIcon from '../images/c.svg';
import PythonIcon from '../images/python.svg';
import CPUIcon from '../images/cpu.svg';

const HomePageLayout = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <div className='home-page-container'>
      <div style={{ marginTop: 50 }}>
        <div className='year-section'>
          <h2>1º Ano</h2>
          <div>
            <div className='semester-section'>
              <h3>1º Semestre</h3>
              <SectionButtonLayout>
                <SectionButton name='CDI-I' link='/cdi-ii' image={CalculusIcon} color='#437AA1' />
                <SectionButton name='AL' link='/cdi-ii' image={AlgebraIcon} color='#C48C31' />
                <SectionButton name='FP' link='/cdi-ii' image={PythonIcon} color='#CE733B' />
                <SectionButton name='IAC' link='/cdi-ii' image={CPUIcon} color='#5CAD7D' />
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
    }
  }
`;
