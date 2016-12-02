var React = require('react');

var Post = require('Post');

var PostList = React.createClass({
  getInitialState: function () {
    return {
      posts: [
        {
          id: 1,
          title: '10 methods to win in gambling',
          content: 'Did you know there are lots of lovely blablablabla aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
        }, {
          id: 2, 
          title: 'How to live life much better',
          content: "Go to Korea, then your life would be much better. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }, {
          id: 3,
          title: 'Why don\'t you quit your job?',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      ]
    }
  },
  renderPosts: function (posts) {
    return posts.map((post) => {
        return (
          <Post key={post.id} {...post}/>
        )
    });
  },
  render: function () {
    return (
      <div>
        {this.renderPosts(this.state.posts)}
      </div>
    );
  }
});

module.exports = PostList;
