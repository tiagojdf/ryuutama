import {SELECT_CLASS} from './player.actions'

export function player(state = {}, action) {
  switch (action.type) {
    case SELECT_CLASS:
      var aux = Object.assign({}, state, {playerClass: action.playerClass})
      console.warn(aux.playerClass.name)
      return aux
    default:
      return state
  }
}
