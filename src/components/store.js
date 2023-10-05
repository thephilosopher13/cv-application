import { combineReducers } from 'redux';
import educationReducer from './reducers/educationReducer';
import experienceReducer from './reducers/experienceReducer';
import personalInfoReducer from './reducers/personalInfoReducer';
import skillsReducer from './reducers/skillsReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  education: educationReducer,
  experience: experienceReducer,
  personalInfo: personalInfoReducer,
  skills: skillsReducer,
  // Add more reducers if needed
});

const store = createStore({ reducer: rootReducer});

export default store;