import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styleVariables from '../Config/styleVariables';


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});


class PlayerClass extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>{this.props.playerClass.name}</Text>
        <Text>{this.props.playerClass.description}</Text>
        {this.props.playerClass.skills.map( (skill) => {
          return (
            <Text key={skill}>{skill}</Text>
          )
        })}
        <TouchableHighlight onPress={this.selectPlayerClass.bind(this)}>
          <Text>Select</Text>
        </TouchableHighlight>
      </View>
    )
  }
  selectPlayerClass() {
    console.warn(this.props.playerClass.name);
  }
};


module.exports = PlayerClass;
