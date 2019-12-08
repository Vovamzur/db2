import { SET_IS_LOADING, SET_USER } from './action.types';

const intialState = {
  user: null,
  isAuthorized: false,
  isLoading: false,
}

export default (state = intialState, action) => {
  switch (action.type) {
    case SET_USER:
      const user = action.payload;
      return {
        ...state,
        user,
        isAuthorized: Boolean(user && user.id)
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default: 
      return state;
  }
};