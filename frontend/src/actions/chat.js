import axios from 'axios'
import { GET_MESSAGES, ADD_MESSAGE } from './types'

export const getMessages = () => (dispatch) => {

  axios.get(`http${process.env.REACT_APP_SERVER}/api/chat`).then(res => {
    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    })
  }).catch(err =>
    console.log(err.response.data, err.response.status)
  )
}

export const addMessage = (message, callback) => (dispatch) => {
  axios.post(`http${process.env.REACT_APP_SERVER}/api/chat/`, message).then(res => {
    callback(res.data)
  }).catch(err =>
    console.log(err.response.data, err.response.status)
  )
}

export const socketMessage = (message) => (dispatch) => {

  dispatch({
    type: ADD_MESSAGE,
    payload: message
  })
}
