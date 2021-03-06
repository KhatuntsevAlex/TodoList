import { loginApi } from '../api/api'

const SET_CONFIRMATION = 'SET_LOGIN_DATA'
const ON_CHANGE_LOGIN_DATA = 'ON_CHANGE_LOGIN_DATA'



const initialState = {
  isConfirmed: false,
  token: '',
  username: '',
  password: '',
}

const loginReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIRMATION:
      if (action.token) {
        return { ...state, isConfirmed: true, token: action.token}
      }
      return { ...state, username: '', password: '' }
    case ON_CHANGE_LOGIN_DATA:
      return {
        ...state,
        username: action.userName,
        password: action.userPassword,
      }
    default:
      return state
  }
}

export default loginReduser

// Action creators
export const setLoginData = (token)  => ({ type: SET_CONFIRMATION, token })
export const onChangeLoginData = (userName, userPassword) => ({
  type: ON_CHANGE_LOGIN_DATA,
  userName,
  userPassword,
})

// Thunk creators
export const login = (developer, form) => dispatch => {
  loginApi.login(developer, form).then(data => {
    if (data.status === 'ok') {
      dispatch(setLoginData(data.message.token))
      dispatch(onChangeLoginData('', ''))
    }
})
}
