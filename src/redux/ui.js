import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setWorkPlaceControl: ['payload']
});

export const InitTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  workPlaceControl: {
    inEdit: false,
    resourceInFocus: 'content'
  }
});

/* ------------- Reducers ------------- */
const setWorkPlaceControl = (state, { payload }) => state.merge({
  workPlaceControl: payload
});

/* ------------- Selectors ------------- */
export const getWorkPlaceControl = ({ ui }) => ui.workPlaceControl;

/* ------------- Root Reducer ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_WORK_PLACE_CONTROL]: setWorkPlaceControl
});