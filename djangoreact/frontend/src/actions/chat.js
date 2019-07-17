import axios from 'axios'
import { GET_MESSAGES, ADD_MESSAGE } from './types'


export const getMessages = () => (dispatch) => {

  axios.get(`/api/chat`).then(res => {

    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    })
  }).catch(err =>
    console.log(err.response.data, err.response.status)
  )

}


export const addMessage = (message) => (dispatch) => {
  axios.post(`/api/chat/`, message, tokenConfig(getState)).then(res => {

    dispatch({
      type: ADD_MESSAGE,
      payload: res.data
    })

  }).catch(err =>
    console.log(err.response.data, err.response.status)
  )
}

