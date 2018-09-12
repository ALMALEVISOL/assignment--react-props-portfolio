import React, {Component} from 'react'

class EduTitle extends Component {
  render() {
    const props = this.props;
    return (
      <div className="degree">
       <h5 className="degree__institute">{ props.eduProp.institute } </h5>
       <p className="degree__field">{ props.eduProp.fieldOfStudy  }</p>
       <p className="degree__dates">{ props.eduProp.dates  }</p>
     </div>
    );
  }
}

export default EduTitle
