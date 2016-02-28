import {
  StyleSheet,
} from 'react-native'

import styleVariables from '../../../Config/styleVariables'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    elevation: 2,
    margin: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  skills: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    marginBottom: 5,
  },
  skill: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  select: {
    backgroundColor: styleVariables.colors.springDarkGreen,
    padding: 5,
    borderRadius: 5,
  },
  selectText: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  }
})
