import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  showPromotionalModal: ['payload'],
  showAuthTouchModal: ['payload']
});

export const InitTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  hasConnection: true,
  logoutModalVisible: false
});

/* ------------- Reducers ------------- */
const showLogoutModal = (state, { payload }) => state.merge({
  logoutModalVisible: payload
});

const showAuthTouchModal = (state, { payload }) => state.merge({
  authTouchModalVisible: payload
});

const hideCustomDialog = state => state.merge({
  customDialog: {
    type: '',
    visible: false,
    buttons: []
  }
});



/* ------------- Selectors ------------- */
export const getLogoutModalVisibility = ({ ui }) => ui.logoutModalVisible;
export const getAuthTouchModalVisibility = ({ ui }) => ui.authTouchModalVisible;
/* ------------- Root Reducer ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_LOGOUT_MODAL]: showLogoutModal,
  [Types.SHOW_AUTH_TOUCH_MODAL]: showAuthTouchModal,
});