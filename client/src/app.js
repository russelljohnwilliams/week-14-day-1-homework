var React = require('react');
var ReactDOM = require('react-dom');
var MovieBox = require('./components/MovieBox');

window.onload = function(){
  ReactDOM.render(
    <MovieBox />,
    document.getElementById('app')
  );
}
