import React, {Component} from 'react'

class Skill extends Component {
  render() {
    const props = this.props;
    return (
      <span className="skills-list__single">
        {props.skillProp}
      </span>
    );
  }
}

export default Skill
