// auth.ts
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const STORE_USER_DETAILS = "STORE_USER_DETAILS";

// Define a new interface for user details
export interface UserDetails {
  name: {
    title: string;
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
  email: string;
  dob: {
    age: number;
    date: string;
  };
  location: {
    country: string;
    city: string;
    postcoad: number;
    state: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  phone: string;
}

// Define initial state
const initialState: AuthState = {
  isLoggedIn: false,
  username: "",
  user: undefined,
};

export const storeUserDetails = (user: UserDetails) => ({
  type: STORE_USER_DETAILS,
  payload: { user },
});

export const loginSuccess = (username: string) => ({
  type: LOGIN_SUCCESS,
  payload: { username },
});

export const logout = () => ({
  type: LOGOUT,
});

export interface AuthState {
  isLoggedIn: boolean;
  username: string;
  user?: UserDetails; // Include user details in the state
}

export type AuthAction =
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof logout>
  | ReturnType<typeof storeUserDetails>;

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if ("payload" in action && "username" in action.payload) {
        return {
          ...state,
          isLoggedIn: true,
          username: action.payload.username,
        };
      }
      break;
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        user: undefined, // Reset user details on logout
      };
    case STORE_USER_DETAILS:
      if ("payload" in action && "user" in action.payload) {
        return {
          ...state,
          user: action.payload.user,
        };
      }
      break;
    default:
      return state;
  }

  return state;
};

export default authReducer;
