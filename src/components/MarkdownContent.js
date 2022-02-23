import {
  Box,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import Rehype2react from 'rehype-react';

const renderAst = new Rehype2react({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    h1: (props) => <Typography variant='h3' component='h1' gutterBottom {...props} />,
    h2: (props) => <Typography variant='h4' component='h2' gutterBottom {...props} />,
    h3: (props) => <Typography variant='h5' component='h3' gutterBottom {...props} />,
    h4: (props) => <Typography variant='h6' component='h4' gutterBottom {...props} />,
    h5: (props) => <Typography variant='subtitle1' component='h5' gutterBottom {...props} />,
    h6: (props) => <Typography variant='subtitle2' component='h6' gutterBottom {...props} />,
    p: (props) => <Typography variant='body1' {...props} />,
    li: (props) => <Typography variant='body1' component='li' {...props} />,
    a: (props) => <Link {...props} />,
    table: (props) => <Table {...props} />,
    thead: (props) => <TableHead {...props} />,
    tbody: (props) => <TableBody {...props} />,
    tr: (props) => <TableRow {...props} />,
    td: (props) => <TableCell {...props} />,
    th: (props) => <TableCell component='th' {...props} />,
  },
}).Compiler;

const Link = React.forwardRef((props, ref) => (
  <MuiLink component={GatsbyLink} innerRef={ref} {...props} />
));

const MarkdownContent = ({ htmlAst }) => {
  return <Box>{renderAst(htmlAst)}</Box>;
};

export default MarkdownContent;
