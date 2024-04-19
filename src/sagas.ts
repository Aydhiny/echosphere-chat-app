import { all, takeLatest, put } from 'redux-saga/effects';

function* sendMessageSaga(action: any) {
  try {
    // Here you can perform any asynchronous operations, e.g., sending message to server
    yield put({ type: 'SEND_MESSAGE', payload: action.payload });
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

function* rootSaga() {
  yield all([
    takeLatest('SEND_MESSAGE_REQUEST', sendMessageSaga),
  ]);
}

export default rootSaga;