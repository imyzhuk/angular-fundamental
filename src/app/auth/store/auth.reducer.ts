export const AUTH_FEATURE_KEY = 'auth';
let initialState: AuthState = {
  isUserAuthorized: false,
  token: null as string | null,
  errorMessage: null as string | null,
  isRegistrated: false
};

export interface AuthState {
  isUserAuthorized: boolean,
  token: string | null,
  errorMessage: string | null,
  isRegistrated: boolean
};

const authReducer = (state: AuthState = initialState, action: any): AuthState => {
  switch (action.type) {
    case 'REQUEST_LOGIN_SUCCESS':
      return {
        ...state,
        isUserAuthorized: true,
        token: action.token,
      }
    case 'REQUEST_LOGIN_FAIL':
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
    case 'REQUEST_LOGOUT':
      return {
        ...state,
        isUserAuthorized: false,
        token: null,
      }
    case 'REQUEST_REGISTER_SUCCESS':
      return {
        ...state,
        isRegistrated: true,
      }
    case 'REQUEST_REGISTER_FAIL':
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        errorMessage: null,
      }
    default:
      return state;
  }
};

export default authReducer;
