/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Platform,
  Navigator
} from 'react-native';

var PlayerContainer = require('./App/Components/PlayerContainer');

class ryuutama extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Ryuutama',
          component: PlayerContainer
        }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('ryuutama', () => ryuutama);

if (Platform.OS === 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);

  AppRegistry.runApplication('ryuutama', {
    rootTag: app
  });
}
