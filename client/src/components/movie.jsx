var React = require('react')

var Movie = React.createClass({


  handleDelete: function(){
    this.props.handleCommentDelete(this.props.id)
  },

  render: function(){
    return(
      <div className="movie">
        <a href={'http://www.imdb.com/title/' + this.props.id } target="_blank" className='movie-title'>
          {this.props.title}
        </a>
        {this.props.children} 
      </div>
      )
  }

})


module.exports = Movie