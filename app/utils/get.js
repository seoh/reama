/**
  * Using Github v3 API
  *
  */

export default {
  // LIST: https://developer.github.com/v3/issues/#list-issues
  list: ()  =>
    fetch(`https://api.github.com/repos/seoh/reama/issues`),

  // Comments: https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue
  comments: (n) =>
    fetch(`https://api.github.com/repos/seoh/reama/issues/${n}/comments`),
};
