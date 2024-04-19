import { combineReducers } from 'redux';

interface ChatState {
  messages: string[];
  currentUser: string;
}

const initialChatState: ChatState = {
  messages: [],
  currentUser: 'Guest', // Default to Guest user
};

function chatReducer(state = initialChatState, action: any): ChatState {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  chat: chatReducer,
});

export default rootReducer;