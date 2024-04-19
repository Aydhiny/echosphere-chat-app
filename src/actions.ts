export const SEND_MESSAGE = 'SEND_MESSAGE';

// Define action creators
export const sendMessage = (message: string) => ({
  type: SEND_MESSAGE,
  payload: message,
});
