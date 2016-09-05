var React = require('react')

var Movie = React.createClass({

// propTypes:{
//   title: React.PropTypes.String.isRequired
// },

  render: function(){
    return(
      <div className="movie">
        <a href={'http://www.imdb.com/title/' + this.props.id } target="_blank" className='movie-title'>
          {this.props.title}
        </a>
      </div>
      )
  }

})


module.exports = Movie