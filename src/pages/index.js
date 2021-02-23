import { Container, Link, Typography } from "@material-ui/core";
import { graphql, Link as GatsbyLink } from "gatsby";
import * as React from "react";

const IndexPage = ({ data }) => {
  return (
    <Container>
      <Typography variant="h1">Resumos LEIC-A</Typography>
      {data.allMdx.nodes.map((node) => (
        <Link component={GatsbyLink} to={node.slug} key={node.slug}>
          {node.frontmatter.title}
        </Link>
      ))}
    </Container>
  );
};

// Get top level pages
export const query = graphql`
  query MyQuery {
    allMdx(filter: { slug: { regex: "[a-zA-Z0-9-_]/" } }) {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;

export default IndexPage;
