import React from 'react';
import Issue from './Issue';

export default class IssueList extends React.Component {
  render() {
    return (
      <div>
        { this.props.data.map((issue, index) =>
          <Issue data={issue} key={index} />
        )}
      </div>
    );
  }
}

IssueList.propTypes = {
  data: React.PropTypes.array,
};

