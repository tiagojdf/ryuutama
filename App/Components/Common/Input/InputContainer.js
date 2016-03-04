import { connect } from 'react-redux'

import Input from './Input'

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.player[ownProps.tag],
    tag: ownProps.tag,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeText: (input) => {
      dispatch(ownProps.onPress(input))
    }
  }
}

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)

module.exports = InputContainer
