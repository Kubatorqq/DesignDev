import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#151515',
    },
    secondary: {
      main: '#52B480',
    },
    sunnyBgr: {
      main: '#FFEB3B',
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial, sans-serif',
    h2: {
      fontSize: '40px',
      fontWeight: 'bold',
      textAlign: 'center',
      [createTheme().breakpoints.down('md')]: {
        fontSize: '32px',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          color: theme.palette.primary.main,
          backgroundColor: '#FFFFFF',
          fontSize: '16px',
        },
      }),
    },
    MuiGrid2: {
      styleOverrides: {
        root: {
          '@media (min-width: 1441px)': {
            maxWidth: '1164px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.customStyles.gradient,
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '16px',
          textTransform: 'none',
          borderRadius: theme.customStyles.borderRadiusSmall,
          paddingTop: '14px',
          paddingBottom: '14px',
          lineHeight: '20px',
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '34px',
          '& path': {
            fill: theme.palette.secondary.main,
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          textDecorationColor: theme.palette.secondary.main,
          textDecorationSkipInk: 'none',
        }),
      },
    },
  },
  customStyles: {
    gradient: 'radial-gradient(100% 246.25% at 100% 50%, #B1CA52 0%, #418241 100%)',
    gradientImage:
      'radial-gradient(102.89% 88.03% at 117.2% 102.58%, #fffbf2 0%, #f8f3e9 0.01%, #ffffff 100%)',
    gradientButton: 'linear-gradient(90deg, #FFB74D 0%, #FF9800 100%)',
    borderColor: '#52B480',
    borderColorLight: '#15151533',
    borderRadiusSmall: '14px',
    borderRadius: '20px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.07)',
  },
});

export default theme;
