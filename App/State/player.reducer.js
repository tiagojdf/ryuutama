import {
  SELECT_CLASS,
  SELECT_TYPE,
  UPDATE_STATS,
  UPDATE_NAME,
  UPDATE_GENDER,
  UPDATE_AGE,
  UPDATE_HOMETOWN,
  UPDATE_APPEARANCE,
  UPDATE_NOTES,
} from './player.actions'

export function player(state = {}, action) {
  switch (action.type) {
    case SELECT_CLASS:
      return Object.assign({}, state, {playerClass: action.playerClass})
    case SELECT_TYPE:
      return Object.assign({}, state, {playerType: action.playerType})
    case UPDATE_STATS:
      return Object.assign({}, state, {stats: action.stats})
    case UPDATE_NAME:
      return Object.assign({}, state, {name: action.name})
    case UPDATE_GENDER:
      return Object.assign({}, state, {gender: action.gender})
    case UPDATE_AGE:
      return Object.assign({}, state, {age: action.age})
    case UPDATE_HOMETOWN:
      return Object.assign({}, state, {hometown: action.hometown})
    case UPDATE_APPEARANCE:
      return Object.assign({}, state, {appearance: action.appearance})
    case UPDATE_NOTES:
      return Object.assign({}, state, {notes: action.notes})
    default:
      return state
  }
}
