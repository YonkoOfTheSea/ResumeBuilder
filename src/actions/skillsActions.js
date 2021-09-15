import * as actionTypes from './actionTypes';
export const add=(documentId, skillsSection)=>{
    return {type: actionTypes.ADD_SKILLS, skillsSection:skillsSection}
}
export const update=(documentId, skillsSection)=>{
    return {type: actionTypes.UPDATE_SKILLS, skillsSection:skillsSection} 
}