import CloseIcon from '@mui/icons-material/CloseRounded';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import ContentFullWidthIcon from '@mui/icons-material/FitScreenRounded';
import ContentCompactIcon from '@mui/icons-material/FullscreenExitRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import PaletteIcon from '@mui/icons-material/PaletteRounded';
import {
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useState } from 'react';
import { useFontSettings } from '../hooks/theme-hooks';
import useThemeSettings from '../hooks/useThemeSettings';

const Heading = styled(Typography)(({ theme }) => ({
  margin: '20px 0 10px',
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(11),
  textTransform: 'uppercase',
  letterSpacing: '.08rem',
}));

const IconToggleButton = styled(ToggleButton)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  '& > *': {
    paddingRight: '8px',
  },
});

const ThemeSettings = () => {
  const [open, setOpen] = useState(false);
  const { themeStyle, setThemeStyle, themeName, setThemeName, contentWidth, setContentWidth } =
    useThemeSettings();
  useFontSettings();
  const toggleOpen = () => setOpen((v) => !v);

  const onButtonGroupChange = (setter) => (_, value) => value && setter(value);

  const onSelectChange = (setter) => (event) => setter(event.target.value);

  return (
    <>
      <IconButton onClick={toggleOpen}>
        <PaletteIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={open}
        onClose={toggleOpen}
        PaperProps={{
          elevation: 0,
          sx: { width: { xs: 310, sm: 360 }, borderRadius: '10px 0px 0px 10px' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography variant='body1' fontWeight='500'>
            Reading Options
          </Typography>
          <IconButton onClick={toggleOpen}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ px: 2 }}>
          <Heading gutterBottom color='textSecondary'>
            Theme Style
          </Heading>
          <ToggleButtonGroup
            exclusive
            value={themeStyle}
            fullWidth
            onChange={onButtonGroupChange(setThemeStyle)}
          >
            <IconToggleButton value='light'>
              <LightModeIcon />
              Light
            </IconToggleButton>
            <IconToggleButton value='system'>
              <DarkModeIcon />
              System
            </IconToggleButton>
            <IconToggleButton value='dark'>
              <DarkModeIcon />
              Dark
            </IconToggleButton>
          </ToggleButtonGroup>

          <Heading gutterBottom color='textSecondary'>
            Theme
          </Heading>
          <Select fullWidth value={themeName} onChange={onSelectChange(setThemeName)}>
            <MenuItem value='nord'>Nord</MenuItem>
            <MenuItem value='solarized'>Solarized</MenuItem>
          </Select>

          <Heading gutterBottom color='textSecondary'>
            Content Width
          </Heading>
          <ToggleButtonGroup
            exclusive
            value={contentWidth}
            fullWidth
            onChange={onButtonGroupChange(setContentWidth)}
          >
            <IconToggleButton value='compact'>
              <ContentCompactIcon />
              Compact
            </IconToggleButton>
            <IconToggleButton value='fullwidth'>
              <ContentFullWidthIcon />
              Full Width
            </IconToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Drawer>
    </>
  );
};

export default ThemeSettings;
