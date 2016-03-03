import React, {
  View,
  Text,
  TextInput
} from 'react-native'

var Input = ({tag, text, changeText}) => {
    return (
          <View>
            <Text>{tag.charAt(0).toUpperCase() + tag.slice(1)}:</Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(newText) => changeText(newText)}
                value={text}
              />
          </View>
    )
  }


Input.propTypes = {
  tag: React.PropTypes.string.isRequired,
  text: React.PropTypes.any.isRequired,
  changeText: React.PropTypes.func.isRequired,
}

module.exports = Input
