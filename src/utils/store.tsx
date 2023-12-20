import { createStore, combineReducers } from "redux";
import authReducer, { AuthState } from "./auth";

export interface RootState {
  auth: AuthState;
}

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
