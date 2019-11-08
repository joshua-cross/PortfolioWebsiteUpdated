import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import projectsReducer from './projectsReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    login: loginReducer,
    primaryProjects: projectsReducer,
    primaryProject: projectReducer
})