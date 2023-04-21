import { Action } from "./ngrx"

export const COUNTER_ACTIONS_DICC = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  RESET: 'RESET'
}

const COUNTER_ACTIONS = {
  [COUNTER_ACTIONS_DICC.INCREMENT]: (state: number, action:Action) => {
    return state + action.payload
  },
  [COUNTER_ACTIONS_DICC.DECREMENT]: (state: number, action:Action) => {
    return state - action.payload
  },
  [COUNTER_ACTIONS_DICC.MULTIPLY]: (state: number, action:Action) => {
    return state * action.payload
  },
  [COUNTER_ACTIONS_DICC.DIVIDE]: (state: number, action:Action) => {
    if (isNaN(action.payload)) throw new Error(`Cant divide by ${typeof action.payload}`)
    if (action.payload === 0) throw new Error('Cant divide by 0')
    return state / action.payload
  },
  [COUNTER_ACTIONS_DICC.RESET]: (state: number, action:Action) => {
    return state = 0
  }
}

export function reducer(state = 10, action: Action) {
  const counterAction = COUNTER_ACTIONS[action.type]
  return (counterAction) ? counterAction(state, action) : state;
}