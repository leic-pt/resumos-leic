import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import React, { useMemo } from 'react';
import Rehype2react from 'rehype-react';
import useThemeSettings from '../hooks/useThemeSettings';
import IframeEmbed from './IframeEmbed';
import SmartLink from './SmartLink';

const renderAst = new Rehype2react({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    h1: (props) => <Typography variant='h1' gutterBottom {...props} />,
    h2: (props) => <Typography variant='h2' sx={{ mt: 3 }} gutterBottom {...props} />,
    h3: (props) => <Typography variant='h3' sx={{ mt: 3 }} gutterBottom {...props} />,
    h4: (props) => <Typography variant='h4' sx={{ mt: 3 }} gutterBottom {...props} />,
    h5: (props) => <Typography variant='h5' sx={{ mt: 3 }} gutterBottom {...props} />,
    h6: (props) => <Typography variant='h6' sx={{ mt: 3 }} gutterBottom {...props} />,
    p: (props) => (
      <Typography
        variant='body1'
        align='justify'
        sx={{ lineHeight: '1.7' }}
        gutterBottom
        {...props}
      />
    ),
    li: (props) => (
      <Typography
        variant='body1'
        component='li'
        sx={{ lineHeight: '1.7' }}
        gutterBottom
        {...props}
      />
    ),
    a: SmartLink,
    table: (props) => <Table {...props} />,
    thead: (props) => <TableHead {...props} />,
    tbody: (props) => <TableBody {...props} />,
    tr: (props) => <TableRow {...props} />,
    td: (props) => <TableCell {...props} />,
    th: (props) => <TableCell component='th' {...props} />,
    info: (props) => <Alert variant='outlined' severity='info' {...props} />,
    tip: (props) => (
      <Alert
        icon={<TipsAndUpdatesIcon fontSize='inherit' />}
        variant='outlined'
        severity='success'
        {...props}
      />
    ),
    warning: (props) => <Alert variant='outlined' severity='warning' {...props} />,
    error: (props) => <Alert variant='outlined' severity='error' {...props} />,
    'alert-title': (props) => <AlertTitle sx={{ textTransform: 'uppercase' }} {...props} />,
    details: (props) =>
      props.withoutWrapper ? (
        <Accordion {...props} />
      ) : (
        <Box sx={{ my: 2 }}>
          <Accordion {...props} />
        </Box>
      ),
    'details-summary': (props) => (
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h4' component='p' {...props} />
      </AccordionSummary>
    ),
    'details-content': AccordionDetails,
    'details-group': (props) => <Box sx={{ my: 1 }} {...props} />,
    hr: (props) => <Divider sx={{ my: 1 }} {...props} />,
    'iframe-embed': IframeEmbed,
    blockquote: (props) => (
      <Box
        component='blockquote'
        sx={{ borderLeft: 4, borderLeftColor: 'secondary.main', pl: 2 }}
        {...props}
      />
    ),
    code: (props) =>
      props.className?.includes('language-') ? <code {...props} /> : <CodeInline {...props} />,
  },
}).Compiler;

const CodeInline = styled('code')(({ theme }) => ({
  backgroundColor: theme.palette.action.focus,
  padding: '0.25rem 0.5rem',
  margin: 0,
  fontSize: '0.85em',
  borderRadius: 3,
}));

const MarkdownStylesContainer = styled(Box)(({ theme }) => ({
  ...Object.keys(theme.palette?.markdownColors || {}).reduce((acc, color) => {
    acc[`& .md-color--${color}`] = {
      color: theme.palette?.markdownColors[color],
    };
    return acc;
  }, {}),
  ...(theme.palette.mode === 'dark' && {
    "& .gatsby-resp-image-wrapper[data-dark='1'], img[data-dark='1']": {
      filter: 'invert(1) hue-rotate(180deg) saturate(5)',
    },
    "& .gatsby-resp-image-wrapper[data-dark='2'], img[data-dark='2']": {
      filter: 'invert(1) hue-rotate(180deg) saturate(3)',
    },
    "& .gatsby-resp-image-wrapper[data-dark='3'], img[data-dark='3']": {
      filter: 'invert(1) hue-rotate(180deg)',
    },
    "& .gatsby-resp-image-wrapper[data-dark='4'], img[data-dark='4']": {
      filter: 'invert(1)',
    },
    '& div.mermaid': {
      filter: 'invert(1) hue-rotate(135deg)',
    },
  }),
  '& .math.math-display': {
    overflowX: 'auto',
  },
  '& img': {
    maxWidth: '100%',
  },
}));

const MarkdownContent = ({ htmlAst }) => {
  const { contentWidth } = useThemeSettings();

  const width = contentWidth === 'fullwidth' ? 'auto' : '740px';

  const renderedAst = useMemo(() => renderAst(htmlAst), [htmlAst]);

  return (
    <MarkdownStylesContainer sx={{ maxWidth: width, margin: 'auto' }}>
      {renderedAst}
    </MarkdownStylesContainer>
  );
};

export default MarkdownContent;
