import {
  StyleSheet,
} from 'react-native'

import styleVariables from '../../../Config/styleVariables'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    borderBottomColor: styleVariables.colors.springDarkGreen,
    borderBottomWidth: 1,
  },
})
