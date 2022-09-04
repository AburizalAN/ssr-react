import types from './types'

export const fetchDataUsers = (page = 1) => async (dispatch, getState, api) => {
  const response = await api.get(`/users`)
  const data = response.data
  dispatch({
    type: types.SET_GLOBAL_TEST,
    payload: data, 
  })
}