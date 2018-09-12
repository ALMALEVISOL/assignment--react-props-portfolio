import React, {Component} from 'react'
import Skill from './Skill';
import { randomBytes } from 'crypto';

class SkillsList extends Component {
  render() {
    const props = this.props;
    let x = 0;
    return (
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          {props.skills.map( eachSkill  => {
            return (<Skill key={ Math.random() } skillProp={eachSkill}/>)
          })}
        </div>
      </section>
    )
  }
}

export default SkillsList;
