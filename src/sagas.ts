import { all, takeLatest, put } from 'redux-saga/effects';

function* exampleSaga() {
  try {
    // Add your saga logic here
  } catch (error) {
    // Handle errors
  }
}

function* rootSaga() {
  yield all([
    takeLatest('EXAMPLE_ACTION', exampleSaga),
    // Add more sagas here if needed
  ]);
}

export default rootSaga;