import { Box, Divider, Link, Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';
import IstLogo from '../images/ist-logo.svg';
import MarkdownContent from './MarkdownContent';
//import '../styles/homepage.css';
//import '../styles/main.css';
//import '../styles/markdown.css';
import Navbar from './Navbar';
import PageMetadata from './PageMetadata';
import SectionButton, { SectionButtonLayout } from './SectionButton';

const HomePageLayout = ({ data }) => {
  const { markdownRemark: page, site } = data;
  return (
    <Box sx={{ width: 'clamp(100px, 90%, 900px)', mt: 8, mx: 'auto' }}>
      <PageMetadata />
      <Navbar title={site.siteMetadata.title} />
      <Box sx={{ textAlign: 'center' }}>
        <img src={IstLogo} alt='Instituto Superior Técnico' width={150} />
        <Typography variant='h3' component='h1' gutterBottom sx={{ fontWeight: 'bold' }}>
          Resumos LEIC-A
        </Typography>
        <Typography variant='body1'>Bem vindo ao site comunitário de resumos de LEIC-A.</Typography>
        <Typography variant='body1'>
          Aqui irás encontrar tudo o que precisas ao longo do semestre.
        </Typography>
      </Box>
      <Box sx={{ mt: 6 }}>
        {page.frontmatter.years.map(({ name, semesters }) => (
          <Box key={name}>
            <Typography variant='h4' component='h2' gutterBottom sx={{ mt: 2 }}>
              {name}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              {semesters.map(({ name, courses }) => (
                <Box sx={{ mx: '0.7rem', flexGrow: 1 }} key={name}>
                  <Typography variant='h5' component='h3' gutterBottom>
                    {name}
                  </Typography>
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
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <MarkdownContent htmlAst={page.htmlAst} />
      <Divider />
      <Typography textAlign='center' sx={{ my: 2 }}>
        Made by <Link href='https://diogotc.com'>Diogo Correia</Link> with ❤️
      </Typography>
    </Box>
  );
};

export default HomePageLayout;

export const pageQuery = graphql`
  query HomePageByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
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
