var React = require('react');

var Navigation = require('Navigation');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation/>
        Hello world!
      </div>
    )
  }
});

module.exports = Main;
