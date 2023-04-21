
import { Action } from "./ngrx"
import { COUNTER_ACTIONS_DICC } from "./ngrx.reducer"

export const addAction = (payload_value: number): Action<number> => {
  return {
    type: COUNTER_ACTIONS_DICC.INCREMENT,
    payload: payload_value
  }
} 

export const subAction = (payload_value: number): Action<number> => {
  return {
    type: COUNTER_ACTIONS_DICC.DECREMENT,
    payload: payload_value
  }
}

export const multiplyAction = (payload_value: number): Action<number> => {
  return {
    type: COUNTER_ACTIONS_DICC.MULTIPLY,
    payload: payload_value
  }
}

export const divideAction = (payload_value: number): Action<number> => {
  return {
    type: COUNTER_ACTIONS_DICC.DIVIDE,
    payload: payload_value
  }
}

export const resetAction= () => {
  return {
    type: COUNTER_ACTIONS_DICC.RESET
  }
}