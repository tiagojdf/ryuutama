import {
  StyleSheet,
} from 'react-native'

import styleVariables from '../../Config/styleVariables'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFF9C4',
    borderColor: '#FFECB3',
    borderBottomColor: '#FFD54F',
    borderRightColor: '#FFE082',
    borderWidth: 2,
    marginBottom: 5
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontStyle: 'italic',
    fontSize: 12,
    marginBottom: 5,
  },
  skills: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    marginBottom: 5,
  },
  skill: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  select: {
    backgroundColor: styleVariables.colors.springLightGreen,
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
