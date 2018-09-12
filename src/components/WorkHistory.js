import React, {Component} from 'react'
import Job from './Job';

class WorkHistory extends Component {
  render() {
    console.log('???');
    const props = this.props;
    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
        jobsList
          { props.jobsList.map( eachJob => {
            return ( <Job job={ eachJob }/> )
          })
          }
        </div>
      </section>
    )
  }
}

export default WorkHistory;
