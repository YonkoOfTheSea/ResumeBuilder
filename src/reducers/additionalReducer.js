import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
import initialState from './initialState.json'
export default function additionalReducer(state = initialState.additionalSection, action) {
    switch (action.type) {
       case actionsCodes.ADD_ADDITIONAL:
            return update(state,  { $set: action.additionalSection  } );
        case actionsCodes.UPDATE_ADDITIONAL:
            return update(state,  { $merge: action.additionalSection  });
       default: return state;
    }  
}