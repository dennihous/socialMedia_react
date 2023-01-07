import {createContext} from 'react';

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false
};

export const AuthContext = createContext(INITIAL_STATE);