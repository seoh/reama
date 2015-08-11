import React from 'react';
import moment from 'moment';
import marked from 'marked';
import { comments } from '../utils/get';

marked.setOptions({gfm: true});

export default class Issue extends React.Component {

  componentDidMount() {
    this.props.data.number &&
      comments(this.props.data.number)
        .then(data => data.json())
        .then(json => this.setState({comments: json}));
  }

  // #TODO split comments-list and comments logic
  render() {
    const d = this.props.data;
    return (
      <article className="post">
        <header className="post__head">
          <time dateTime={d.created_at} className="post__time">{ d.created_at && moment(d.created_at).fromNow() }</time>
          <h1 className="post__title">
            <a href={d.url}>
              { d.title }
            </a>
          </h1>
        </header>
        <div className="post__main echo" dangerouslySetInnerHTML={{ __html: marked(d.body) }} />
        <footer className="post__foot u-cf">
          <ul className="u-fl">
            { this.state && this.state.comments.map((c, i) =>
              <li key={i} dangerouslySetInnerHTML={{ __html: marked(c.body) }} />
            )}
          </ul>
          <a href="" className="post__foot-link u-fr"></a>
        </footer>
      </article>
    );
  }
}

Issue.propTypes = {
  data: React.PropTypes.object,
};
