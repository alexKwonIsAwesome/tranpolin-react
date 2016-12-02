var React = require('react');

var Post = React.createClass({
  render: function () {
    var {id, title, content} = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    )
  }
});

module.exports = Post;
