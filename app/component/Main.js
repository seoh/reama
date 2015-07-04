import React from 'react'
import { AppBar, Styles } from 'material-ui'
import IssueList from './IssueList'

const ThemeManager = new Styles.ThemeManager();

export default class Main extends React.Component {
  componentDidMount() {
    fetch("https://api.github.com/repos/seoh/reama/issues")
    .then((data)=> data.json())
    .then((json)=> {
      this.setState({data: json});
    });
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager
    }
  }

  render() {
    return (
      <div>
        <AppBar title="Ask Me Anything" />
        { this.state ?
          <IssueList {...this.state} />
        : <div> waiting... </div>
        }
      </div>)
  }
}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object
}

