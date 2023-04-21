// import { Store } from "redux";
// import { reducer } from "./ngrx-clone/ngrx.reducer";
// import { legacy_createStore as createStore} from 'redux'
// import { addAction } from "./ngrx-clone/ngrx.actions";
import { addAction } from "./ngrx-clone/ngrx.actions";
import { reducer } from "./ngrx-clone/ngrx.reducer";
import { Store } from "./ngrx-clone/ngrx.store";

// const store: Store = createStore(reducer)

// store.subscribe(() => {
//   console.log(store.getState())
// })

// store.dispatch(addAction(5))

const store = new Store(reducer, 0);

console.log(store.getState());
store.dispatch(addAction(5));
console.log(store.getState());