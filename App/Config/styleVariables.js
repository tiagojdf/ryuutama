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
    primary: '#91C578',
    accent: 'white',
    background: '#F2F1F1',  // very light gray
    black: '#444444',
    white: '#FFFFFF',
    springDarkGreen: '#578461',
    springLightGreen: '#91C578',
    winterDarkBlue: '#2B80A0',
    winterLightBlue: '#92D7F8',
  },

  // BORDER RADIUS
  radius: 8,
}
