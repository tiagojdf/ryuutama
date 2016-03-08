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

// TODO refactor all this calculations to occur on SELECT_CLASS or SELECT_TYPE if stats exist
function calculateMaxHp(type, STR) {
  return (type === 'attack' ? 4 : 0) + STR * 2
}
function calculateMaxMp(type, SPI) {
  return (type === 'magic' ? 4 : 0) + SPI * 2
}
function calculateCC(travellerClass, type, STR) {
  return (type === 'technical' ? 3 : 0) + (travellerClass === 'farmer' ? 3 : 0) + STR
}
// TODO either use reselect or move this to its own reducer
// idea: 2 step setting, as substats depends on stats and other player stuff
function calculateSubstats(traveller) {
  if (!traveller.stats || !traveller.playerClass || !traveller.playerType) {return}
  return {
    maxHp: calculateMaxHp(traveller.playerType.name, traveller.stats.STR),
    maxMp: calculateMaxMp(traveller.playerType.name, traveller.stats.SPI),
    CC: calculateCC(traveller.playerClass.name, traveller.playerType.name, traveller.stats.STR),
  }
}

export function player(state = {
  stats: {
    STR: 6,
    DEX: 6,
    INT: 6,
    SPI: 6,
  }
}, action) {
  switch (action.type) {
    case SELECT_CLASS:
      return Object.assign({}, state, {playerClass: action.playerClass, substats: calculateSubstats(state)})

    case SELECT_TYPE:
      return Object.assign({}, state, {playerType: action.playerType, substats: calculateSubstats(state)})

    case UPDATE_STATS:
      return Object.assign({}, state, {stats: action.stats, substats: calculateSubstats(state)})

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
