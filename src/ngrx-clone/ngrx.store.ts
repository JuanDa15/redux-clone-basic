import { Action, Reducer } from "./ngrx";

export class Store<T> {
  private _state: T;

  constructor( 
    private _reducer: Reducer<T>, 
    private state: T
  ) {
      this._state = state;
  }

  getState() {
    return this._state;
  }
  
  dispatch( action: Action ) {
    this._state = this._reducer(this._state, action);
  }
}