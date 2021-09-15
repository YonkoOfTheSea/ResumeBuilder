import * as actionTypes from './actionTypes';
export const add=(documentId, projectsSection)=>{
    return {type: actionTypes.ADD_PROJECTS, projectsSection:projectsSection}
}
export const update=(documentId, projectsSection)=>{
    return {type: actionTypes.UPDATE_PROJECTS, projectsSection:projectsSection} 
}