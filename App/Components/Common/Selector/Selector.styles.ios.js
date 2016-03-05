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
    backgroundColor: '#FAFAFA',
    margin: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    }
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
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
    backgroundColor: styleVariables.colors.springDarkGreen,
    padding: 5,
    borderRadius: 5,
  },
  selectText: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  image: {
    flex: 1,
    alignSelf: 'center'
  }
})
