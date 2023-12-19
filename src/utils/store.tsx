import { createStore, combineReducers } from "redux";
import authReducer, { AuthState } from "./auth";

export interface RootState {
  auth: AuthState;
  darkMode: boolean;
}

const rootReducer = combineReducers({
  auth: authReducer,
  darkMode: (state = false, action: any) => state,
});

const store = createStore(rootReducer);

export default store;
