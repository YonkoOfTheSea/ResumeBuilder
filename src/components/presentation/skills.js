import React,{useState,useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'
import * as skillsActions from '../../actions/skillsActions';
import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";

function Skills(props) {
  let history = useHistory();
  const [skills,setSkills]= useState(props.skillsSection);
  useEffect(() => {
      if(!props.document || !props.document.id)
      {
          history.push('/education')
      }
  }, [])
 
 const onchange = (event) => {
   var key =event.target.name;
   var val =event.target.value;
   setSkills({...skills,[key]:val})
 }
 
 const onSubmit = async(e) => {
   //console.log(this.state.educationSection);
   if(skills){
       props.updateSkills(props.document.id,skills);
   }else{
       props.addSkills(props.document.id,skills);
   }
    history.push('/projects')
 }

 const getFieldData=(key)=>{
   if(skills && skills[key]){
     return skills[key]
   }
   return "";
}

   
  return (
      <div className="container med skills" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Skills Section</h2>
            <div className="form-section">
              <div className="input-group"><label>Language</label>
              <div className="effect"><input type="text" name={fieldCd.Language} value={getFieldData(fieldCd.Language)}  onChange={onchange}  /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Frameworks</label>
              <div className="effect"><input type="text" name={fieldCd.Frameworks} value={getFieldData(fieldCd.Frameworks)}  onChange={onchange}  /><span></span>

                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Tools</label>
              <div className="effect"><input type="text" name={fieldCd.Tools} value={getFieldData(fieldCd.Tools)}  onChange={onchange}  /><span></span>

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
            <ResumePreview contactSection={props.contactSection} educationSection={props.educationSection} skillsSection={skills} skinCd={props.document.skinCd}></ResumePreview>            
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
      document:state.document
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      
     addSkills:(id,skills)=>dispatch(skillsActions.add(id,skills)),
     updateSkills:(id,skills)=>dispatch(skillsActions.update(id,skills))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Skills))

