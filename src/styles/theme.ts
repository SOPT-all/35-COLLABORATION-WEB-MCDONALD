const theme = {
  colors: {
    black: '#000000',
    gray700: '#292929',
    gray600: '#333333',
    gray500: '#808080',
    gray400: '#898989',
    gray300: '#909090',
    gray250: '#B2B2B2',
    gray200: '#D1D1D1',
    gray100: '#E1E1E1',
    gray000: '#F8F8F8',
    white: '#FFFFFF',

    yellow01: '#FFFF00',
    yellow02: '#F5BD44',
    red01: '#DB0006',
    red02: '#C70207',
    green: '#274A37',

    Blackgrad: 'rgba(0, 0, 0, 0.50)',
  },

  boxShadows: {
    Shadow01: '0px 1px 4px 0px #E4E4E4',
    white80: '0px 1px 4px 0px #E4E4E4',
  },

  fonts: {
    headline01: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '44px',
      fontWeight: 900,
      lineHeight: 'normal',
      letterSpacing: '0',
    },
    headline02: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '38px',
      fontWeight: 900,
      lineHeight: 'normal',
      letterSpacing: '0',
    },

    title01: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '-1.44px',
    },
    title02: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '30px',
      fontWeight: 900,
      lineHeight: 'normal',
      letterSpacing: '0',
    },
    title03: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '26px',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '-0.52px',
    },
    title04: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '-0.44px',
    },
    title05: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '22px',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.88px',
    },
    title06: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '160%',
      letterSpacing: '0.14px',
    },
    title07: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '0',
    },

    body01: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '16px',
      fontWeight: 900,
      lineHeight: 'normal',
      letterSpacing: '0',
    },
    body02: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '0',
    },
    body03: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.96px',
    },
    body04: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '-0.64px',
    },
    body05: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '170%',
      letterSpacing: '0',
    },
    body06: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '15px',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.3px',
    },
    body07: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '14px',
      fontWeight: 300,
      lineHeight: 'normal',
      letterSpacing: '-0.56px',
    },
    body08: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '14px',
      fontWeight: 200,
      lineHeight: 'normal',
      letterSpacing: '0',
    },
    body09: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: '0',
    },
    body10: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '13px',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.52px',
    },
    body11: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '11px',
      fontWeight: 200,
      lineHeight: 'normal',
      letterSpacing: '0',
    },

    caption01: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.48px',
    },
    caption02: {
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '10px',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.4px',
    },
  },
};

export type ColorType = typeof theme.colors;
export type BoxShadowType = typeof theme.boxShadows;
export type FontType = typeof theme.fonts;

export default theme;
