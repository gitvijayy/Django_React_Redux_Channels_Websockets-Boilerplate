import { GET_MESSAGES, ADD_MESSAGE } from '../actions/types'


const initialState = {

  messages: []

}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:

      return {
        ...state,
        messages: action.payload
      }

    case ADD_MESSAGE:


      return {
        ...state,
        messages: [...state.messages, action.payload]
      }


    default:
      return state;
  }
}

//!for referance
/*import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js'

const initialState = {
  leads: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      // console.log(action.payload)
      return {
        ...state,
        leads: action.payload
      }
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload)
      }
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload]
      }
    default:
      return state;
  }
} */