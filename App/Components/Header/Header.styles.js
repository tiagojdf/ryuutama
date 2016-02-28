import {
  StyleSheet,
} from 'react-native'

import styleVariables from '../../Config/styleVariables'

export default StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: styleVariables.colors.springDarkGreen
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: styleVariables.colors.accent
  },
})
