import {SELECT_CLASS} from './player.actions'
import {SELECT_TYPE} from './player.actions'
import {UPDATE_STATS} from './player.actions'

export function player(state = {}, action) {
  switch (action.type) {
    case SELECT_CLASS:
      return Object.assign({}, state, {playerClass: action.playerClass})
    case SELECT_TYPE:
      return Object.assign({}, state, {playerType: action.playerType})
    case UPDATE_STATS:
      return Object.assign({}, state, {stats: action.stats})
    default:
      return state
  }
}
