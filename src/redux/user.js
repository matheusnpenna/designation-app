import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setUser: ['payload'],
  setWorkPlace: ['payload']
});

export const InitTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  workPlace: null,
  user: null
});

/* ------------- Reducers ------------- */
const setUser = (state, { payload }) => state.merge({ user: payload });
const setWorkPlace = (state, { payload }) => state.merge({ apiKey: payload });

/* ------------- Selectors ------------- */
export const getUser = ({ user }) => user.user;
export const getWorkPlace = ({ user }) => user.workPlace;

/* ------------- Root Reducer ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.SET_WORK_PLACE]: setWorkPlace
});