import {
  StyleSheet,
} from 'react-native'

import styleVariables from '../../../Config/styleVariables'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60
  },
  button: {
    width: 30,
    height: 60,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleVariables.colors.springDarkGreen,
    borderWidth: 2,
    borderColor: 'white'
  },
  leftButton: {
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  rightButton: {
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  stat: {
    width: 60,
    height: 60,
    padding: 5,
    marginLeft: 2,
    marginRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleVariables.colors.springDarkGreen,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: 'white'
  },
  image: {
    flex: 1,
    alignSelf: 'center'
  },
  text: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
})
