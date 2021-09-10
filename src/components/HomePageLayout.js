import { graphql } from 'gatsby';
import React from 'react';
import IconAL from '../images/courses/al.svg';
import IconCDI1 from '../images/courses/cdi1.svg';
import IconCDI2 from '../images/courses/cdi2.svg';
import IconCDI3 from '../images/courses/cdi3.svg';
import IconFP from '../images/courses/fp.svg';
import IconGes from '../images/courses/ges.svg';
import IconIAC from '../images/courses/iac.svg';
import IconIAED from '../images/courses/iaed.svg';
import IconIEI from '../images/courses/iei.svg';
import IconLP from '../images/courses/lp.svg';
import IconMD from '../images/courses/md.svg';
import IconFis1 from '../images/courses/fis1.svg';
import IconFis2 from '../images/courses/fis2.svg';
import IconPO from '../images/courses/po.svg';
import IconSO from '../images/courses/so.svg';
import IconASA from '../images/courses/asa.svg';
import IconPE from '../images/courses/pe.svg';
import IconTC from '../images/courses/tc.svg';
import IconIPM from '../images/courses/ipm.svg';
import IconIA from '../images/courses/ia.svg';
import IconBD from '../images/courses/bd.svg';
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
                <SectionButton
                  name='CDI-I'
                  description='S1'
                  link='/cdi-i'
                  image={IconCDI1}
                  color='#1976d2'
                />
                <SectionButton
                  name='AL'
                  description='S1'
                  link='/al'
                  image={IconAL}
                  color='#303f9f'
                />
                <SectionButton
                  name='FP'
                  description='P1'
                  link='/fp'
                  image={IconFP}
                  color='#d32f2f'
                />
                <SectionButton
                  name='IEI'
                  description='P1'
                  link='/iei'
                  image={IconIEI}
                  color='#f57f17'
                />
                <SectionButton
                  name='Gestão'
                  description='P2'
                  link='/ges'
                  image={IconGes}
                  color='#00695c'
                />
                <SectionButton
                  name='LP'
                  description='P2'
                  link='/lp'
                  image={IconLP}
                  color='#33691e'
                />
              </SectionButtonLayout>
            </div>
            <div className='semester-section'>
              <h3>2º Semestre</h3>
              <SectionButtonLayout>
                <SectionButton
                  name='CDI-II'
                  description='S2'
                  link='/cdi-ii'
                  image={IconCDI2}
                  color='#1565c0'
                  long
                />
                <SectionButton
                  name='IAED'
                  description='P3'
                  link='/iaed'
                  image={IconIAED}
                  color='#c62828'
                />
                <SectionButton
                  name='Física I'
                  description='P3'
                  link='/fis-i'
                  image={IconFis1}
                  color='#00695c'
                />
                <SectionButton
                  name='IAC'
                  description='P4'
                  link='/iac'
                  image={IconIAC}
                  color='#ff6f00'
                />
                <SectionButton
                  name='EMD'
                  description='P4'
                  link='/md'
                  image={IconMD}
                  color='#283593'
                />
              </SectionButtonLayout>
            </div>
          </div>
        </div>
        <div className='year-section'>
          <h2>2º Ano</h2>
          <div>
            <div className='semester-section'>
              <h3>1º Semestre</h3>
              <SectionButtonLayout>
                <SectionButton
                  name='CDI-III'
                  description='S1'
                  link='/cdi-iii'
                  image={IconCDI3}
                  color='#0d47a1'
                  long
                />
                <SectionButton
                  name='PO'
                  description='P1'
                  link='/po'
                  image={IconPO}
                  color='#b71c1c'
                />
                <SectionButton
                  name='Física II'
                  description='P1'
                  link='/fis-ii'
                  image={IconFis2}
                  color='#004d40'
                />
                <SectionButton
                  name='SO'
                  description='P2'
                  link='/so'
                  image={IconSO}
                  color='#f57f17'
                />
                <SectionButton
                  name='ASA'
                  description='P2'
                  link='/asa'
                  image={IconASA}
                  color='#33691e'
                />
              </SectionButtonLayout>
            </div>
            <div className='semester-section'>
              <h3>2º Semestre</h3>
              <SectionButtonLayout>
                <SectionButton
                  name='PE'
                  description='S2'
                  link='/pe'
                  image={IconPE}
                  color='#9c27b0'
                  long
                />
                <SectionButton
                  name='TC'
                  description='P3'
                  link='/tc'
                  image={IconTC}
                  color='#e53935'
                />
                <SectionButton
                  name='IPM'
                  description='P3'
                  link='/ipm'
                  image={IconIPM}
                  color='#2e7d32'
                />
                <SectionButton
                  name='BD'
                  description='P4'
                  link='/bd'
                  image={IconBD}
                  color='#757575'
                />
                <SectionButton
                  name='IA'
                  description='P4'
                  link='/ia'
                  image={IconIA}
                  color='#3f51b5'
                />
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
