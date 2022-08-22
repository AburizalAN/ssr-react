import globalTypes from './types';

const initialState = {
  test: 'test',
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalTypes.SET_GLOBAL_TEST:
      return {
        ...state,
        test: action.payload,
      }
    default:
      return state
  }
}

export default globalReducer