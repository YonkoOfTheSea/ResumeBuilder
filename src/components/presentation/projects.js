import React,{useState,useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'
import * as projectsActions from '../../actions/projectsActions';
import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";

function Projects(props) {
  let history = useHistory();
  const [projects,setProjects]= useState(props.projectsSection);
  useEffect(() => {
      if(!props.document || !props.document.id)
      {
          history.push('/skills')
      }
  }, [])
 
 const onchange = (event) => {
   var key =event.target.name;
   var val =event.target.value;
   setProjects({...projects,[key]:val})
 }
 
 const onSubmit = async(e) => {
   //console.log(this.state.educationSection);
   if(projects){
       props.updateProjects(props.document.id,projects);
   }else{
       props.addProjects(props.document.id,projects);
   }
    history.push('/additional')
 }

 const getFieldData=(key)=>{
   if(projects && projects[key]){
     return projects[key]
   }
   return "";
}

   
  return (
      <div className="container med projects" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Projects Section</h2>
            <div className="form-section">
              <div className="input-group"><label>Project1</label>
              <div className="effect"><input type="text" name={fieldCd.Project1} value={getFieldData(fieldCd.Project1)}  onChange={onchange}  /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Project2</label>
              <div className="effect"><input type="text" name={fieldCd.Project2} value={getFieldData(fieldCd.Project2)}  onChange={onchange}  /><span></span>

                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Project3</label>
              <div className="effect"><input type="text" name={fieldCd.Project3} value={getFieldData(fieldCd.Project3)}  onChange={onchange}  /><span></span>

                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contactSection} educationSection={props.educationSection} skillsSection={props.skillsSection} projectsSection={Projects} skinCd={props.document.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }



  
const mapStateToProps=(state)=>{
  return {
      contactSection:state.contactSection,
      educationSection:state.educationSection,
      skillsSection:state.skillsSection,
      projectsSection:state.projectsSection,
      document:state.document
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      
     addProjects:(id,projects)=>dispatch(projectsActions.add(id,projects)),
     updateProjects:(id,projects)=>dispatch(projectsActions.update(id,projects))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Projects))

