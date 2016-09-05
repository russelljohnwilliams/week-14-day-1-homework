var React = require('react')

var Movie = React.createClass({

  propTypes:{
    author: React.PropTypes.string.isRequired
  },

  handleDelete: function(){
    this.props.handleCommentDelete(this.props.id)
  },

  render: function(){
    return(
      <div className="movie">
        <h2 className='comment-title'>
          {this.props.title}
        </h2>
        {this.props.children} 
      </div>
      )
  }

})


module.exports = Movie