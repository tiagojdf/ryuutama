/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import {
  AppRegistry,
  Platform,
} from 'react-native'

var ryuutama = require('./App/index')

AppRegistry.registerComponent('ryuutama', () => ryuutama)

if (Platform.OS === 'web'){
  var app = document.createElement('div')
  document.body.appendChild(app)

  AppRegistry.runApplication('ryuutama', {
    rootTag: app
  })
}
