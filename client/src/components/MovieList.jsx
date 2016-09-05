var React = require('react')
var Movie = require('./movie')

var MovieList = React.createClass({

  propTypes:{
    data: React.PropTypes.array.isRequired,
  },

  render: function(){

    var movieNodes = this.props.data.map(function(movie){
      
      return(
         <h1>help</h1>
        )
    }.bind(this))


    return(
      <div className="movie-list">
        {movieNodes}
      </div>
    )
  }

})


module.exports = MovieList



// <Comment title={comment.title} id={comment.id} key={comment.id} }>
// {comment.text}
// </Comment>