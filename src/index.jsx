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
  getInitialState:function(){
    return{editing:false}
  },
  edit:function() {
    this.setState({editing:true})
    //alert('Editing comment');
  },
  save:function(){
    var val=this.refs.newText.value;
    console.log(val);
    this.setState({editing:false})
  },
  remove:function(){
    console.log('removing comment');
  },
  EditMode:function()
  {
    return(
    <div>
    <textarea ref="newText" defaultValue={this.props.children }></textarea>
      <button onClick={this.save} color="blue">Save</button>
      </div>
    )
  },
  DisplayMode:function()
  {
    return(
      <div>
    <div>{this.props.children} </div>
      <button onClick = {this.edit} color="red">Edit</button>
      <button onClick={this.remove} color="blue">Remove</button>
      </div>
    );

  },
  render:function(){
      if (this.state.editing){
       return this.EditMode();
    }else{
      return this.DisplayMode();
    }

  }
})

var PropsDemo = React.createClass({
getInitialState:function(){
    return ({checked:true})
},
togglechecked:function()
{
  this.setState({checked: !this.state.checked})
},
render:function()
{
var msg;
if(this.state.checked){
  msg='checked'
}else{
  msg='Unchecked'
}
return(
  <div>
<input type = "checkbox" onChange = {this.togglechecked} defaultChecked={this.state.checked}/>
<h3>Checkbox is {msg}</h3>
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
      <PropsDemo/>
      </div>
    )
  }

})
ReactDOM.render(<MainMethod />, document.getElementById('app'));
