import * as actionTypes from './actionTypes';
export const add=(documentId, additionalSection)=>{
    return {type: actionTypes.ADD_ADDITIONAL, additionalSection:additionalSection}
}
export const update=(documentId, additionalSection)=>{
    return {type: actionTypes.UPDATE_ADDITIONAL, additionalSection:additionalSection} 
}