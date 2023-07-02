import { combineReducers } from 'redux';
import CardValues from './CardValues/CardReducers';
// Import other reducers as needed

const rootReducer = combineReducers({
  card: CardValues,
  // Add other reducers here
});

export default rootReducer;
