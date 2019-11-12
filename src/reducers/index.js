import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import projectsReducer from './projectsReducer';
import projectReducer from './projectReducer';
import secondaryProjectsReducer from './secondaryProjectsReducer';
import secondaryProjectReducer from './secondaryProjectReducer';

export default combineReducers({
    login: loginReducer,
    primaryProjects: projectsReducer,
    primaryProject: projectReducer,
    secondaryProjects: secondaryProjectsReducer,
    secondaryProject: secondaryProjectReducer
})