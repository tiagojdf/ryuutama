/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  Navigator,
  Platform
} from 'react-native';

var Main = require('./App/Components/Main');

class ryuutama extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Ryuutama',
          component: Main
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

if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);

  AppRegistry.runApplication('ryuutama', {
    rootTag: app
  })
}
