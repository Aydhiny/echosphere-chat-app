import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { sendMessage } from './actions';
const ChatApp: React.FC = () => {
  const dispatch = useDispatch();
const messages = useSelector((state: RootState) => state.chat.messages);
const currentUser = useSelector((state: RootState) => state.chat.currentUser);
  const [messageInput, setMessageInput] = React.useState('');

  const handleSendMessage = () => {
    dispatch(sendMessage(messageInput));
    setMessageInput('');
  };

  return (
    <div className="chat-app">
      <div className="message-list">
        {messages.map((message: string, index: number) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
