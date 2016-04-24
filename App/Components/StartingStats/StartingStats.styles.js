import {
  StyleSheet,
} from 'react-native'

import styleVariables from '../../Config/styleVariables'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  invalid: {
    borderColor: 'red',
    borderWidth: 2,
  },
  select: {
    backgroundColor: styleVariables.colors.springDarkGreen,
    padding: 5,
    borderRadius: 5,
    margin: 20
  },
  selectText: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
})
