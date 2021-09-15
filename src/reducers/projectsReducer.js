import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
import initialState from './initialState.json'
export default function projectsReducer(state = initialState.projectsSection, action) {
    switch (action.type) {
       case actionsCodes.ADD_PROJECTS:
            return update(state,  { $set: action.projectsSection  } );
        case actionsCodes.UPDATE_PROJECTS:
            return update(state,  { $merge: action.projectsSection  });
       default: 
       return state;
    }  
}