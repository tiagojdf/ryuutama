import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styleVariables from '../Config/styleVariables';

var Header = require('./Header');
var PlayerClass = require('./PlayerClass');

import playerClasses from '../Data/playerClasses';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 30,
    paddingTop: 95,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: styleVariables.colors.background
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});


class Main extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Header />
        <View style={styles.mainContainer}>
          {playerClasses.map( (playerClass) => {
            return (
              <PlayerClass key={playerClass.name} playerClass={playerClass} />
            )
          })}
        </View>
      </View>
    )
  }
}

module.exports = Main;
