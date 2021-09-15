import React,{useState,useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'
import * as educationActions from '../../actions/educationActions';
import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";

function Education(props) {
   let history = useHistory();
   const [education,setEducation]= useState(props.educationSection);
   useEffect(() => {
       if(!props.document || !props.document.id)
       {
           history.push('/contact')
       }
   }, [])
  
  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setEducation({...education,[key]:val})
  }
  
  const onSubmit = async(e) => {
    //console.log(this.state.educationSection);
    if(education){
        props.updateEducation(props.document.id,education);
    }else{
        props.addEducation(props.document.id,education);
    }
     history.push('/skills')
  }

  const getFieldData=(key)=>{
    if(education && education[key]){
      return education[key]
    }
    return "";
}

    
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName} 
                  onChange={onchange} value={education[fieldCd.SchoolName]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree} value={getFieldData(fieldCd.Degree)}  onChange={onchange}  /><span></span>
                  
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
              <div className="effect"><input type="text" name={fieldCd.GraduationCGPA} value={getFieldData(fieldCd.GraduationCGPA)}  onChange={onchange}  /><span></span>

                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
              <div className="effect"><input type="text" name={fieldCd.City} value={getFieldData(fieldCd.City)}  onChange={onchange}  /><span></span>

                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
              <div className="effect"><input type="text" name={fieldCd.GraduationDate} value={getFieldData(fieldCd.GraduationDate)}  onChange={onchange}  /><span></span>

                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
              <div className="effect"><input type="text" name={fieldCd.GraduationYear} value={getFieldData(fieldCd.GraduationYear)}  onChange={onchange}  /><span></span>

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
            <ResumePreview contactSection={props.contactSection} educationSection={education} skinCd={props.document.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }



  
const mapStateToProps=(state)=>{
  return {
      contactSection:state.contactSection,
      educationSection:state.educationSection,
      document:state.document
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      
     addEducation:(id,education)=>dispatch(educationActions.add(id,education)),
     updateEducation:(id,education)=>dispatch(educationActions.update(id,education))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Education))

