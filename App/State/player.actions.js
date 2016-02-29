/*
** Action types for plqyer
*/
export const SELECT_CLASS = 'SELECT_CLASS'
export const SELECT_TYPE = 'SELECT_TYPE'
export const UPDATE_STATS = 'UPDATE_STATS'

export function selectClass(playerClass) {
  return {
    type: SELECT_CLASS,
    playerClass,
  }
}

export function selectType(playerType) {
  return {
    type: SELECT_TYPE,
    playerType,
  }
}

export function updateStats(playerStats) {
  return {
    type: UPDATE_STATS,
    playerStats,
  }
}
