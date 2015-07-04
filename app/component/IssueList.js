import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui'

export default class IssueList extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.length);

    const issues = this.props.data.map((issue, index) => (
      <Card key={index}>
        <CardHeader title={issue.title} />
        <CardText>{issue.body}</CardText>
      </Card>
    ));

    return (
      <div>
        {issues}
      </div>
    );
  }
}
