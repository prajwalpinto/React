import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
var sty = {color:'red'}
var Header = React.createClass({
  render:function(){
    return(
      <h2>{this.props.names}</h2>
    )
  }
})
var Movie = React.createClass({
  render:function(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.genre}</h1>
      </div>
    )
  }
})
var Thecomment =React.createClass({
  edit:function() {
    alert('Editing comment');
  },
  remove:function(){
    alert('removing comment');
  },
  render:function(){
    return(
      <div>
      <div>{this.props.children} </div>
        <button onClick = {this.edit} color="red">Edit</button>
        <button onClick={this.remove} color="blue">Remove</button>

      </div>

    )
  }
})
var MainMethod = React.createClass({
  render:function(){
    return(
      <div>
      <h1 style={sty}> Hello World!!!!</h1>
      <h2> Helooooooo</h2>
      <Header names="jerrick"/>
      <Header names="Mike"/>
      <Movie title="Avengers" genre="Action" />
      <Movie title="Independence Day" genre="World" />
      <Thecomment>Bla Bla</Thecomment>
      </div>
    )
  }

})
ReactDOM.render(<MainMethod />, document.getElementById('app'));
