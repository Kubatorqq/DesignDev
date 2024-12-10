import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#151515',
    },
    secondary: {
      main: '#52B480',
    },
    sunny: {
      main: '#FFEB3B',
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial, sans-serif',
    htmlFontSize: '1rem',
    fontSize: '1.6rem',
    h2: {
      fontSize: '4rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '4rem',
      marginBottom: '4rem',
      [createTheme().breakpoints.down('md')]: {
        fontSize: '3.2rem',
        marginTop: '3rem',
        marginBottom: '3rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '2.4rem',
        marginTop: '2rem',
        marginBottom: '2rem',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          color: theme.palette.primary.main,
          backgroundColor: '#FFFFFF',
          fontSize: '1.6rem',
        },
      }),
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3, &.MuiTypography-h4, &.MuiTypography-h5, &.MuiTypography-h6':
            {
              fontFamily: 'Nunito, Arial, sans-serif',
            },
        },
      },
    },
    MuiGrid2: {
      styleOverrides: {
        root: {
          '@media (min-width: 1441px)': {
            maxWidth: '1164px', // dle designu
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
          fontSize: '1.6rem',
          textTransform: 'none',
          borderRadius: theme.customStyles.borderRadiusSmall,
          paddingTop: '1.4rem',
          paddingBottom: '1.4rem',
          lineHeight: '2rem',
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
    borderRadiusSmall: '1.4rem',
    borderRadius: '2rem',
    boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.07)',
  },
});

export default theme;
