/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Platform,
  Navigator
} from 'react-native'

import { Provider } from 'react-redux'
import { store } from './App/State/store'

var PlayerContainer = require('./App/Components/PlayerContainer')

class ryuutama extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{
            name: 'Ryuutama',
            component: PlayerContainer
          }}
          renderScene={(route, navigator) => {
            if (route.component) {
              return React.createElement(route.component, { navigator })
            }
          }}
        />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ryuutama', () => ryuutama)

if (Platform.OS === 'web'){
  var app = document.createElement('div')
  document.body.appendChild(app)

  AppRegistry.runApplication('ryuutama', {
    rootTag: app
  })
}
