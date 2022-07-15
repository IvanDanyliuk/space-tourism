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
      '@media (max-width: 420px)': {
        fontSize: '80px',
      },
    },
    h2: {
      fontFamily: 'Bellefair',
      fontSize: '100px',
      textTransform: 'uppercase',
      '@media (max-width: 900px)': {
        fontSize: '80px',
      },
      '@media (max-width: 420px)': {
        fontSize: '56px',
      },
    },
    h3: {
      fontFamily: 'Bellefair',
      fontSize: '56px',
      textTransform: 'uppercase',
      '@media (max-width: 900px)': {
        fontSize: '40px',
      },
      '@media (max-width: 420px)': {
        fontSize: '24px',
      },
    },
    h4: {
      fontFamily: 'Bellefair',
      fontSize: '32px',
      textTransform: 'uppercase',
      '@media (max-width: 900px)': {
        fontSize: '24px',
      },
      '@media (max-width: 420px)': {
        fontSize: '16px',
      },
    },
    h5: {
      fontFamily: 'Barlow Condensed',
      fontSize: '28px',
      textTransform: 'uppercase',
      letterSpacing: 4.75,
      '@media (max-width: 900px)': {
        fontSize: '20px',
      },
      '@media (max-width: 420px)': {
        fontSize: '15px',
      },
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
      '@media (max-width: 420px)': {
        fontSize: '14px',
      },
    },
    body1: {
      fontFamily: 'Barlow Condensed',
      fontSize: '18px',
      letterSpacing: 1.5,
      '@media (max-width: 900px)': {
        fontSize: '16px',
      },
      '@media (max-width: 420px)': {
        fontSize: '15px',
      },
    }
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#d0d6f9',
    },
    info: {
      main: '#0b0d17',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          color: '#d0d6f9'
        },
        selected: {
          color: '#ffffff'
        },
        root: {
          width: 0,
        }
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        }
      }
    }
  }
});

export default theme;