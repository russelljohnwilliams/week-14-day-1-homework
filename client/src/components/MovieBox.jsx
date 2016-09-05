var React = require('react')
var MovieList = require('./MovieList')

var sampleData = [
{title:"Kubo and the Two Strings", id: "tt4302938", link:"http://www.imdb.com/title/tt4302938/"},
{title:"Captain Fantastic", id: "tt3553976", link:"http://www.imdb.com/title/tt3553976/"},
{title:"Don't Breathe", id: "tt4160708", link:"http://www.imdb.com/title/tt4160708/"},
{title:"Hell or High Water", id: "tt2582782", link:"http://www.imdb.com/title/tt2582782/"},
{title:"The Blue Room", id: "tt3230082", link:"http://www.imdb.com/title/tt3230082/"},
{title:"The Final Reel", id: "tt4576384", link:"http://www.imdb.com/title/tt4576384/"}
]

var MovieBox = React.createClass({

  getInitialState: function(){
    return {data: sampleData}
  },


  render: function(){
    return(
      <div className="movie-box">
        <MovieList data={this.state.data}/>
        
      </div>
    )
  }

})

module.exports = MovieBox