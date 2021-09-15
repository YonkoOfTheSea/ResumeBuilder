import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'
import * as additionalActions from '../../actions/additionalActions';
import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";

function Additional(props) {
  let history = useHistory();
  const [additional,setAdditional]= useState(props.additionalSection);

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setAdditional({...additional,[key]:val})
  }
  
  const onSubmit = async(e) => {
    //console.log(this.state.educationSection);
    if(additional){
        props.updateAdditional(props.document.id,additional);
    }else{
        props.addAdditional(props.document.id,additional);
    }
     history.push('/finalize')
  }

    
    return (
      <div className="container med Additional" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Additional Section</h2>
            <div className="form-section">
              <div className="input-group"><label>AddC</label>
                <div className="effect"><input type="text" name={fieldCd.Addc}
                  onChange={onchange} value={additional[fieldCd.Addc]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

             
              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/projects' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contactSection} educationSection={props.educationSection} skillsSection={props.skillsSection} projectsSection={props.projectsSection} additionalSection={additional} skinCd={props.document.skinCd}></ResumePreview>            
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
      additionalSection:state.additionalSection,
      document:state.document
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      
     addAdditional:(id,additional)=>dispatch(additionalActions.add(id,additional)),
     updateAdditional:(id,additional)=>dispatch(additionalActions.update(id,additional))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Additional))

