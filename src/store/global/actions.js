import types from './types'

export const fetchDataUsers = (page = 1) => async (dispatch) => {
  const response = await fetch(`https://randomuser.me/api/?page=${page}&results=4&seed=abc`)
  const data = await response.json()
  dispatch({
    type: types.SET_GLOBAL_TEST,
    payload: data.results 
  })
}