import globalTypes from './types';

const initialState = {
  users: [],
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalTypes.SET_GLOBAL_TEST:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}

export default globalReducer