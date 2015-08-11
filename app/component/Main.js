import React from 'react';
import Issue from './Issue';
import { list } from '../utils/get';

export default class Main extends React.Component {
  componentDidMount() {
    list()
    // fetch('issues.json')
    .then((data)=> data.json())
    .then((json)=> {
      this.setState({data: json});
    });
  }

  render() {
    return (
      <main className="main">
        { this.state
            ?  this.state.data.map((datum, index) =>
                 <Issue data={datum} key={index} />)
            :  <Issue data={{url: '', title: '', body: ''}} />
        }
      </main>);
  }
}
