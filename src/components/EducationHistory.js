import React, {Component} from 'react'
import EduTitle from './EduTitle';

class EducationHistory extends Component {
  render() {
    const props = this.props;
    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          {props.eduList.map( eachEdu  => {
            return (<EduTitle key={ Math.random() } eduProp={eachEdu}/>)
          })}

        </div>
      </section>
    )
  }
}

export default EducationHistory;
