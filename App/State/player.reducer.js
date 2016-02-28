import {SELECT_CLASS} from './player.actions'
import {SELECT_TYPE} from './player.actions'

export function player(state = {}, action) {
  switch (action.type) {
    case SELECT_CLASS:
      return Object.assign({}, state, {playerClass: action.playerClass})
    case SELECT_TYPE:
      return Object.assign({}, state, {playerType: action.playerType})
    default:
      return state
  }
}
