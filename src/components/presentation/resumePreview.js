import React from 'react';
import {fieldCd} from './../../constants/typeCodes'
function ResumePreview(props){

    const rvContact=(key, valToAppend)=>{
        if(props.contactSection){
          return props.contactSection[key]?props.contactSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
    const rvEducation=(key, valToAppend)=>{
        if(props.educationSection){
          return props.educationSection[key]?props.educationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
    const rvSkills=(key, valToAppend)=>{
        if(props.skillsSection){
          return props.skillsSection[key]?props.skillsSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
    const rvProjects=(key, valToAppend)=>{
        if(props.projectsSection){
          return props.projectsSection[key]?props.projectsSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
    const rvAdditional=(key, valToAppend)=>{
        if(props.additionalSection){
          return props.additionalSection[key]?props.additionalSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
   
    return (
            <div className={props.skinCd + " resume-preview "}>
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper' }>
                         {rvContact(fieldCd.FirstName,' ')  
                         + rvContact(fieldCd.LastName)}  </p>
                    <p className={'center address'}>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') 
                    +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode,', ')}</p>
                    <p className={'center'}>{rvContact(fieldCd.Email ) }</p>
                    <p className={'center'}>{rvContact(fieldCd.Phone) } </p>
                </div>
                <div className={'profSummSection text-upper'}>                   
                    <p className="heading bold">PROFESSIONAL SUMMARY</p>
                     <div className={'divider'}></div>
                     <p>{rvContact(fieldCd.ProfSummary)}</p>
                </div>

                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     <p>{rvEducation(fieldCd.SchoolName)}</p>
                     <p>{rvEducation(fieldCd.Degree)}</p>
                     <p>{rvEducation(fieldCd.City)}</p>
                     <p>{rvEducation(fieldCd.GraduationCGPA)}</p>
                     <p>{rvEducation(fieldCd.GraduationDate)}</p>
                     <p>{rvEducation(fieldCd.GraduationYear)}</p>
                </div>

                <div className={'skillsSection text-upper'}>                   
                    <p className="heading bold">SKILLS</p>
                     <div className={'divider'}></div>
                     <p>{rvSkills(fieldCd.Language)}</p>
                     <p>{rvSkills(fieldCd.Frameworks)}</p>
                     <p>{rvSkills(fieldCd.Tools)}</p>
                </div>

                <div className={'projectsSection text-upper'}>                   
                    <p className="heading bold">PROJECTS</p>
                     <div className={'divider'}></div>
                     <p>{rvProjects(fieldCd.Project1)}</p>
                     <p>{rvProjects(fieldCd.Project2)}</p>
                     <p>{rvProjects(fieldCd.Project3)}</p>
                </div>

                <div className={'additionalSection text-upper'}>                   
                    <p className="heading bold">ADDITIONAL</p>
                     <div className={'divider'}></div>
                     <p>{rvAdditional(fieldCd.Add)}</p>
                </div>
            </div>
        )
    }
export default ResumePreview;