import { createTheme /*, responsiveFontSizes*/ } from '@material-ui/core/styles';

// Allow to use breakpoints
const defaultTheme = createTheme();
const smallScreenTreshold = 'xs';

const blue = 'rgb(50,64,147)';
const pink = 'rgb(221,48,124)';
const green = 'rgb(148,193,34)';
const purple = 'rgb(140,78,137)';
const yellow = 'rgb(247,197,30)';
const orange = 'rgb(243,144,62)';
const lightBlue = 'rgb(100,92,237)';
const blue2 = 'rgb(148,193,34)';
const blue3 = 'rgb(0,125,142)';

const white = '#FFFFFF';
const primary = blue;
const secondary = pink;
const tertiary = yellow;
const neutral_web_grey190 = '#201F1E';
const grey10 = '#FAF9F8';
const grey20 = '#F3F2F1';
const grey30 = '#E1DFDD';
const grey40 = '#828282';
const overlay_light = white + '66'; //40% in HEX
const overlay_dark = '#00000066'; /// black 40%
const font1 = "'eurofurence', 'Segoe UI', 'Roboto', 'Oxygen', sans-serif";

let theme = createTheme({
  palette: {
    primary: {
      // light:  primary,// to not be calculated from palette.primary.main
      main: primary,
      // dark: primary ,// to not be calculated from palette.primary.main
      contrastText: white, // to not be calculated from palette.primary.main
    },
    secondary: {
      // light: secondary,// to not be calculated from palette.secondary.main
      main: secondary,
      // dark: secondary ,// to not be calculated from palette.secondary.main
      contrastText: white, // to not be calculated from palette.secondary.main
    },
    tertiary: {
      // light: tertiary,// to not be calculated from palette.tertiary.main
      main: tertiary,
      // dark: tertiary ,// to not be calculated from palette.tertiary.main
      contrastText: secondary, // to not be calculated from palette.tertiary.main
    },
    white: {
      // light: white,// to not be calculated from palette.white.main
      main: white,
      // dark: white ,// to not be calculated from palette.white.main
      contrastText: neutral_web_grey190, // to not be calculated from palette.white.main
    },
    grey10: {
      // light: grey10,// to not be calculated from palette.grey10.main
      main: grey10,
      // dark: grey10 ,// to not be calculated from palette.grey10.main
      contrastText: neutral_web_grey190, // to not be calculated from palette.grey10.main
    },
    grey20: {
      // light: grey20,// to not be calculated from palette.grey20.main
      main: grey20,
      // dark: grey20 ,// to not be calculated from palette.grey20.main
      contrastText: neutral_web_grey190, // to not be calculated from palette.grey20.main
    },
    grey30: {
      // light: grey30,// to not be calculated from palette.grey30.main
      main: grey30,
      // dark: grey30 ,// to not be calculated from palette.grey30.main
      contrastText: neutral_web_grey190, // to not be calculated from palette.grey30.main
    },
    grey40: {
      light: grey40, // to not be calculated from palette.grey40.main
      main: grey40,
      dark: grey40, // to not be calculated from palette.grey40.main
      contrastText: white, // to not be calculated from palette.grey40.main
    },
    overlay_light: {
      // light: overlay_light,// to not be calculated from palette.overlay_light.main
      main: overlay_light,
      // dark: overlay_light ,// to not be calculated from palette.overlay_light.main
      contrastText: neutral_web_grey190, // to not be calculated from palette.overlay_light.main
    },
    overlay_dark: {
      // light: overlay_dark,// to not be calculated from palette.overlay_dark.main
      main: overlay_dark,
      // dark: overlay_dark ,// to not be calculated from palette.overlay_dark.main
      contrastText: white, // to not be calculated from palette.overlay_dark.main
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: 48,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '70px',
      [defaultTheme.breakpoints.down(smallScreenTreshold)]: {
        fontSize: 32,
        lineHeight: '46px',
      },
    },
    h2: {
      fontSize: 40,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '58px',
      [defaultTheme.breakpoints.down(smallScreenTreshold)]: {
        fontSize: 28,
        lineHeight: '41px',
      },
    },
    h3: {
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '33px',
      [defaultTheme.breakpoints.down(smallScreenTreshold)]: {
        fontSize: 20,
        lineHeight: '23px',
      },
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '23px',
    },
    h5: {
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '900',
      lineHeight: '16px',
      textTransform: 'uppercase',
    },
    h6: {
      fontSize: 30,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '44px',
      [defaultTheme.breakpoints.down(smallScreenTreshold)]: {
        fontSize: 18,
        lineHeight: '26px',
      },
    },
    subtitle1: {
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '16px',
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontFamily: font1,
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '16px',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '19px',
    },
    body2: {
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '16px',
    },
    body3: {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '14px',
    },
    button: {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '14px',
      textTransform: 'uppercase',
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h3',
        h3: 'h4',
        h4: 'h5',
        h5: 'h6',
        h6: 'h6',
        subtitle1: 'p',
        subtitle2: 'p',
        body1: 'p',
        body2: 'p',
        button: 'span',
      },
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        border: 1,
        color: 'white !important',
        borderStyle: 'solid',
        boxSizing: 'border-box',
        borderRadius: 8,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        boxShadow: '7px 7px ' + white,
      },
      containedPrimary: {
        color: white,
        borderColor: white,
        boxShadow: '7px 7px ' + white,
        backgroundColor: primary,
        position: 'relative',
        '&:focus': {
          color: white,
          borderColor: white,
          backgroundColor: primary,
          boxShadow: 'none',
        },
        '&:hover': {
          color: white,
          borderColor: white,
          backgroundColor: primary,
          boxShadow: 'none',
        },
        '&:disabled': {
          color: grey40,
          borderColor: grey10,
          backgroundColor: grey10,
          boxShadow: '7px 7px ' + white,
        },
      },
      containedSecondary: {
        color: white,
        borderColor: white,
        boxShadow: '7px 7px ' + white,
        backgroundColor: secondary,
        '&:focus': {
          color: white,
          borderColor: white,
          backgroundColor: secondary,
          boxShadow: 'none',
        },
        '&:hover': {
          color: white,
          borderColor: white,
          backgroundColor: secondary,
          boxShadow: 'none',
        },
        '&:disabled': {
          color: grey40,
          borderColor: grey10,
          backgroundColor: grey10,
          boxShadow: '7px 7px ' + white,
        },
      },
      outlined: {
        border: 1,
        borderStyle: 'solid',
        boxSizing: 'border-box',
        borderRadius: 8,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
      },
      outlinedPrimary: {
        color: white,
        borderColor: white,
        '&:focus': {
          color: primary,
          borderColor: white,
          backgroundColor: white,
        },
        '&:hover': {
          color: primary,
          borderColor: white,
          backgroundColor: white,
        },
        '&:disabled': {
          color: grey40,
          borderColor: grey10,
          backgroundColor: grey10,
        },
      },
      outlinedSecondary: {
        color: white,
        borderColor: white,
        '&:focus': {
          color: secondary,
          borderColor: white,
          backgroundColor: white,
        },
        '&:hover': {
          color: secondary,
          borderColor: white,
          backgroundColor: white,
        },
        '&:disabled': {
          color: grey40,
          borderColor: grey10,
          backgroundColor: grey10,
        },
      },
    },
  },
});

// TODO check if useful and working
// can not be used with font definition
// theme = responsiveFontSizes(theme);

export default theme;