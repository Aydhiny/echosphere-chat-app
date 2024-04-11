import { combineReducers } from 'redux';

interface ExampleState {
  // Define your state shape here
}

const initialState: ExampleState = {
  // Initial state values here
};

function exampleReducer(state = initialState, action: any): ExampleState {
  switch (action.type) {
    // Add your reducer logic here
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  example: exampleReducer,
  // Add more reducers here if needed
});

export default rootReducer;