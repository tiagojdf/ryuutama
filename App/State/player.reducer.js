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

function calculateMaxHp(type, STR) {
  return (type === 'attack' ? 4 : 0) + STR * 2
}
function calculateMaxMp(type, SPI) {
  return (type === 'magic' ? 4 : 0) + SPI * 2
}

export function player(state = {}, action) {
  switch (action.type) {
    case SELECT_CLASS:
      return Object.assign({}, state, {playerClass: action.playerClass})

    case SELECT_TYPE:
      if (state.stats) {
        var substats = Object.assign({}, {
          maxHp: calculateMaxHp(action.playerType.name, state.stats.STR),
          maxMp: calculateMaxMp(action.playerType.name, state.stats.SPI)
        })
      }
      return Object.assign({}, state, {playerType: action.playerType, substats: substats})

    case UPDATE_STATS:
      substats = Object.assign({}, {
          maxHp: calculateMaxHp(state.playerType.name, action.stats.STR),
          maxMp: calculateMaxMp(state.playerType.name, action.stats.SPI)
        })
      return Object.assign({}, state, {stats: action.stats, substats: substats})

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
