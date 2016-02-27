import {Platform} from 'react-native'

const statusBarHeight = Platform.OS === 'ios' ? 20 : 0

export default {
  //  MARGINS
  marginsOuter: 10,
  marginsInner: 5,

  // SIZES
  statusBarHeight: statusBarHeight,
  headerBarHeight: 45,
  footerBarHeight: 55,

  // FONT
  fontFamily: 'helvetica',

  fontSize: {
    big: 18,
    medium: 16,
    regular: 13,
    small: 10,
  },

  fontWeight: {
    bold: '500',
    normal: '300',
    light: '200',
  },

  // COLORS
  colors: {
    primary: '#104028',
    accent: '#F4E6A9',
    background: '#F2F1F1',  // very light gray
    black: '#444444',
    white: '#FFFFFF',
  },

  // BORDER RADIUS
  radius: 8,
}
