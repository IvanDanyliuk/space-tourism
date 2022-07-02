import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Barlow Condensed', 
      'sans-serif',
      'Bellefair', 
      'serif'
    ].join(','),
    h1: {
      fontFamily: 'Bellefair',
      fontSize: '150px',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Bellefair',
      fontSize: '100px',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'Bellefair',
      fontSize: '56px',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'Bellefair',
      fontSize: '150px',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'Barlow Condensed',
      fontSize: '28px',
      textTransform: 'uppercase',
      letterSpacing: 4.75,
    },
    subtitle1: {
      fontFamily: 'Bellefair',
      fontSize: '28px',
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontFamily: 'Barlow Condensed',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: 2.35,
    },
    caption: {
      fontFamily: 'Barlow Condensed',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: 2.7,
    },
    body1: {
      fontFamily: 'Barlow Condensed',
      fontSize: '18px',
      letterSpacing: 1.5,
    }
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#0b0d17',
    },
    info: {
      main: '#d0d6f9',
    }
  }
});

export default theme;