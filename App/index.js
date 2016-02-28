import React, {
  Component,
  Navigator
} from 'react-native'

import { Provider } from 'react-redux'
import { store } from './State/store'

var PlayerContainer = require('./Components/PlayerContainer')

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

module.exports = ryuutama
