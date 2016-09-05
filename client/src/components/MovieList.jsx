var React = require('react')
var Movie = require('./movie')

var MovieList = React.createClass({

  propTypes:{
    data: React.PropTypes.array.isRequired,
  },

  render: function(){

    var movieNodes = this.props.data.map(function(movie){
      
      return(
         <Movie id={movie.id} key={movie.id}>
         <a href={'http://www.imdb.com/title/' + movie.id } target="_blank">{movie.title}</a>
         </Movie>
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