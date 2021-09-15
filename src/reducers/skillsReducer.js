import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
import initialState from './initialState.json'
export default function skillsReducer(state = initialState.skillsSection, action) {
    switch (action.type) {
       case actionsCodes.ADD_SKILLS:
            return update(state,  { $set: action.skillsSection  } );
        case actionsCodes.UPDATE_SKILLS:
            return update(state,  { $merge: action.skillsSection  });
       default: 
       return state;
    }  
}